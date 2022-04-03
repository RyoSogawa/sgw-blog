import type { NextPage } from 'next'
import type Post from '../types/post'
import { getAllPosts } from '../lib/api'
import PostCard from '../components/post/PostCard'
import Layout from '../components/common/Layout'
import Heading from '../components/ui/Heading'
import Author from '../components/author/Author'
import ButtonLink from '../components/ui/ButtonLink'

type Props = {
  posts: Post[]
}

const PageIndex: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <div className={'container grid place-items-center h-screen'}>
        <blockquote className={'font-inter font-bold text-center fsz-48ptr'}>
          “Everything in It’s Right Place”
          <span className="block font-extralight fsz-11ptr">
            --Radiohead 2000
          </span>
        </blockquote>
      </div>
      <section className="section">
        <div className="container max-w-[700px]">
          <Heading as={'h2'} id={'about'}>
            About
          </Heading>
          <div className="grid gap-6 mt-8 lg:grid-flow-col lg:gap-12">
            <Author className={'shrink-0'} imageType={'photo'} />
            <div>
              <p>
                香川県出身福岡県在住の 33 歳 1
                児の父。フリーランスでエンジニアをしています。
              </p>
              <p className={'mt-4'}>
                React を使ったWebフロントエンドを中心に、企画 / 要件定義 / UI
                デザイン / システム設計 / バックエンド / インフラ /
                ネイティブアプリ等もやっています。
              </p>
            </div>
          </div>
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
          <div className="grid gap-6 mt-4 lg:grid-flow-col lg:mt-8">
            {posts.map(post => (
              <PostCard post={post} key={post.slug} />
            ))}
          </div>
          <div className="mt-8 text-center lg:mt-12">
            <ButtonLink href={'/posts'} theme={'secondary'}>
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
