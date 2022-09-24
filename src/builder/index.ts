import { createPostsFile } from './posts';
import { generatedRssFeed } from './rss';

(async function () {
  await createPostsFile();
  await generatedRssFeed();
})();
