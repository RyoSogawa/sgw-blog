/**
 * @see https://fwywd.com/tech/next-feed-rss-atom
 */
import fs from 'fs';

import { Feed } from 'feed';

import { SITE_URL, SITE_NAME, SITE_DESC } from '../../next-seo.config';
import { AUTHOR } from './config';

import type { PostItem } from '../type';

export const generatedRssFeed = async () => {
  const baseUrl = SITE_URL;
  const date = new Date();

  const feed = new Feed({
    title: SITE_NAME,
    description: SITE_DESC,
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${AUTHOR.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      // json: `${baseUrl}/rss/feed.json`,
      // atom: `${baseUrl}/rss/atom.xml`,
    },
    author: AUTHOR,
  });

  const postsBuffer = fs.readFileSync('./.contents/posts.json');
  const posts = JSON.parse(postsBuffer.toString()) as PostItem[];

  const formattedPosts = posts.map((post) => ({
    title: post.title,
    description: post.contentSnippet,
    id: post.link,
    link: post.link,
    content: post.contentSnippet,
    date: new Date(post.dateMiliSeconds),
  }));

  formattedPosts.forEach((post) => {
    feed.addItem(post);
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  // fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  // fs.writeFileSync('./public/rss/feed.json', feed.json1())
};
