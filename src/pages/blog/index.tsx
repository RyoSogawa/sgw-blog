import type { NextPage } from 'next'
import type Post from '../../types/post'
import { getAllPosts } from '../../lib/api'
import PostCard from '../../components/post/PostCard'
import Layout from '../../components/common/Layout'
import Heading from '../../components/ui/Heading'
import { useCallback, useMemo, useState } from 'react'
import Button from '../../components/ui/Button'

type Props = {
  posts: Post[]
}

const POST_PER_PAGE = 5

const PageBlog: NextPage<Props> = ({ posts }) => {
  const [displayItemsCount, setDisplayItemsCount] = useState(POST_PER_PAGE)
  const totalItemsCount = posts?.length || 0
  const canLoadMore = totalItemsCount - displayItemsCount > 0

  const displayingPosts = useMemo(
    () => posts.slice(0, displayItemsCount),
    [posts, displayItemsCount]
  )

  const loadMore = useCallback(() => {
    setDisplayItemsCount(prev => prev + POST_PER_PAGE)
  }, [])

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className={'container'}>
          <Heading as={'h1'}>Blog</Heading>
          <div className="grid gap-6 mt-20 lg:grid-flow-col lg:mt-8">
            {displayingPosts.map(post => (
              <PostCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
        {canLoadMore && (
          <div className="mt-10 text-center">
            <Button theme={'secondary'} onClick={loadMore}>
              Load More...
            </Button>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default PageBlog

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'tags',
    'emoji',
    'publishedAt',
  ])

  return {
    props: { posts: allPosts },
  }
}
