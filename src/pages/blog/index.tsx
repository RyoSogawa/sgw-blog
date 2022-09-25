import { useCallback, useMemo, useState } from 'react';

import posts from '../../../.contents/posts.json';
import Layout from '../../components/common/Layout';
import Seo from '../../components/functional/Seo';
import PostCard from '../../components/post/PostCard';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';

import type { NextPage } from 'next';

const POST_PER_PAGE = 15;

const PageBlog: NextPage = () => {
  const [displayItemsCount, setDisplayItemsCount] = useState(POST_PER_PAGE);
  const totalItemsCount = posts?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  const displayingPosts = useMemo(() => posts.slice(0, displayItemsCount), [displayItemsCount]);

  const loadMore = useCallback(() => {
    setDisplayItemsCount((prev) => prev + POST_PER_PAGE);
  }, []);

  return (
    <Layout>
      <Seo title="Blog" pathName="/blog" />
      <section className="pt-32 pb-20">
        <div className="container">
          <Heading as="h1">Blog</Heading>
          <div className="mt-20 grid gap-6 lg:mt-8">
            {displayingPosts.map((post) => (
              <PostCard key={post.link} post={post} />
            ))}
          </div>
        </div>
        {canLoadMore && (
          <div className="mt-10 text-center">
            <Button theme="secondary" onClick={loadMore}>
              Load More...
            </Button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default PageBlog;
