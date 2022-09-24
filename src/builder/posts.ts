/**
 * @see https://github.com/catnose99/team-blog-hub/blob/main/src/builder/posts.ts
 */
import fs from 'fs-extra';
import Parser from 'rss-parser';

import { EXCLUDE_URL_REGEX, SOURCES } from './config';

import type { PostItem } from '../types/global';

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

const parser = new Parser();
let allPostItems: PostItem[] = [];

async function fetchFeedItems(url: string) {
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
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  for (const url of sources) {
    const items = await fetchFeedItems(url);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getFeedItems(): Promise<PostItem[]> {
  const feedItems = await getFeedItemsFromSources(SOURCES);
  if (!feedItems) return [];

  // remove items which matches excludeUrlRegex
  if (EXCLUDE_URL_REGEX) {
    return feedItems.filter((item) => {
      return !item.link.match(new RegExp(EXCLUDE_URL_REGEX));
    });
  }

  return feedItems;
}

(async function () {
  const items = await getFeedItems();
  if (items) allPostItems = [...allPostItems, ...items];
  allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/posts.json', allPostItems);
})();
