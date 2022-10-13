/**
 * @see https://github.com/catnose99/team-blog-hub/blob/main/src/builder/posts.ts
 */
import fs from 'fs-extra';
import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';
import Parser from 'rss-parser';

import { EXCLUDE_URL_REGEX, MANUAL_POST_URLS, SOURCES } from './config';

import type { PostItem } from '../type';

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

const fetchFeedItems = async (url: string) => {
  const parser = new Parser();
  const feed = await parser.parseURL(url);
  if (!feed?.items?.length) return [];

  // return item which has title and link
  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        contentSnippet: contentSnippet?.replace(/\n/g, ''),
        link,
        isoDate,
        dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
      };
    })
    .filter(({ title, link }) => title && link) as FeedItem[];
};

const getFeedItemsFromSources = async (sources: undefined | string[]) => {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  for (const url of sources) {
    const items = await fetchFeedItems(url);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
};

const getFeedItems = async (): Promise<PostItem[]> => {
  const feedItems = await getFeedItemsFromSources(SOURCES);
  if (!feedItems) return [];

  // remove items which matches excludeUrlRegex
  if (EXCLUDE_URL_REGEX) {
    return feedItems.filter((item) => {
      return !item.link.match(new RegExp(EXCLUDE_URL_REGEX));
    });
  }

  return feedItems;
};

const getManualPosts = async (): Promise<PostItem[]> => {
  return Promise.all(
    MANUAL_POST_URLS.map(async (url) => {
      const res = await fetch(url);
      const html = await res.text();
      const jsdom = new JSDOM();
      const parser = new jsdom.window.DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const headElements = doc.head.children;
      const ogMetas = Array.from(headElements)
        .map((element) => {
          const property = element.attributes.getNamedItem('property')?.value;
          if (property?.startsWith('og:')) {
            return {
              name: property.replace('og:', ''),
              content: (element as HTMLMetaElement).content,
            };
          }
          if (property?.startsWith('article:')) {
            return {
              name: property.replace('article:', ''),
              content: (element as HTMLMetaElement).content,
            };
          }
          return null;
        })
        .filter(Boolean) as { name: string; content: string }[];

      const title = ogMetas.find((meta) => meta.name === 'title')?.content || '';
      const description = ogMetas.find((meta) => meta.name === 'description')?.content;
      const date = ogMetas.find((meta) => meta.name === 'published_time')?.content;

      return {
        title,
        contentSnippet: description,
        link: url,
        isoDate: date,
        dateMiliSeconds: date ? new Date(date).getTime() : 0,
      };
    }),
  );
};

export const createPostsFile = async () => {
  const feedItems = await getFeedItems();
  const manualPostItems = await getManualPosts();
  const allItems = [...feedItems, ...manualPostItems].sort(
    (a, b) => b.dateMiliSeconds - a.dateMiliSeconds,
  );
  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/posts.json', allItems);
};
