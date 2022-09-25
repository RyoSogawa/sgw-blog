import { createPostsFile } from './posts';
import { generatedRssFeed } from './rss';

(async function build() {
  await createPostsFile();
  await generatedRssFeed();
})();
