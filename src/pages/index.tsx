import type { NextPage } from 'next'
import type Post from '../types/post'
import { getAllPosts } from '../lib/api'
import PostCard from '../components/post/PostCard'
import Layout from '../components/common/Layout'
import Heading from '../components/ui/Heading'
import ButtonLink from '../components/ui/ButtonLink'
import Profile from '../components/about/Profile'
import FvCopy from '../components/top/FvCopy'

type Props = {
  posts: Post[]
}

const PageIndex: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <FvCopy />
      <section className="section">
        <div className="container max-w-[700px]">
          <Heading as={'h2'} id={'about'}>
            About
          </Heading>
          <Profile />
          <div className="mt-8 text-center">
            <ButtonLink href={'/about'} theme={'secondary'}>
              More About Me
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className={'container'}>
          <Heading as={'h2'} id={'posts'}>
            Posts
          </Heading>
          <div className="grid gap-6 mt-4 lg:grid-cols-3 lg:mt-8">
            {posts.map(post => (
              <PostCard post={post} key={post.slug} />
            ))}
          </div>
          <div className="mt-8 text-center lg:mt-12">
            <ButtonLink href={'/blog'} theme={'secondary'}>
              See All Posts
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading as={'h2'} id={'works'}>
            Works
          </Heading>
          <p className="mt-8 text-center">Now Developing...🛠</p>
        </div>
      </section>
    </Layout>
  )
}

export default PageIndex

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'tags',
    'emoji',
    'publishedAt',
  ])

  const recentPosts = allPosts.slice(0, 3)

  return {
    props: { posts: recentPosts },
  }
}
