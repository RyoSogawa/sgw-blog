/**
 * @see https://fwywd.com/tech/next-feed-rss-atom
 */
import fs from 'fs';

import { Feed } from 'feed';

import { SITE_URL, SITE_NAME, SITE_DESC } from '../../next-seo.config';
import { getAllPosts } from './api';
import markdownToHtml from './markdown/markdownToHtml';
import { htmlToDesc } from './utils';

const generatedRssFeed = async () => {
  const baseUrl = SITE_URL;
  const date = new Date();
  const author = {
    name: 'Ryo Sogawa',
    email: 'koashimitekara.1122@gmail.com',
    link: SITE_URL,
  };

  const feed = new Feed({
    title: SITE_NAME,
    description: SITE_DESC,
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      // json: `${baseUrl}/rss/feed.json`,
      // atom: `${baseUrl}/rss/atom.xml`,
    },
    author,
  });

  const posts = getAllPosts(['title', 'slug', 'content', 'publishedAt']);

  const formattedPosts = await Promise.all(
    posts.map(async (post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      const htmlContent = await markdownToHtml(post.content);
      const desc = htmlToDesc(htmlContent);
      return {
        title: post.title,
        description: desc,
        id: url,
        link: url,
        content: htmlContent,
        date: new Date(post.publishedAt),
      };
    }),
  );

  formattedPosts.forEach((post) => {
    feed.addItem(post);
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  // fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  // fs.writeFileSync('./public/rss/feed.json', feed.json1())
};

export default generatedRssFeed;
