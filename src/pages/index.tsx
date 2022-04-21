import type { NextPage } from 'next'
import type Post from '../types/post'
import { getAllPosts } from '../lib/api'
import PostCard from '../components/post/PostCard'
import Layout from '../components/common/Layout'
import Heading from '../components/ui/Heading'
import ButtonLink from '../components/ui/ButtonLink'
import Profile from '../components/about/Profile'
import FvCopy from '../components/top/FvCopy'
import generatedRssFeed from '../lib/feed'

type Props = {
  posts: Post[]
}

const PageIndex: NextPage<Props> = ({ posts }) => (
  <Layout>
    <FvCopy />
    <section className="section">
      <div className="container">
        <Heading as="h2" size="h6" id="my-main-focus">
          My Main Focus
        </Heading>
        <Heading as="h3" size="h2" className="mt-4">
          心の豊かさを支える
          <br />
          サービスの提供
        </Heading>
        <div className="mt-8 text-center prose">
          <div className="inline-block text-left">
            <p>人の心をより豊かにするサービスを作りたいと思っています。</p>
            <p>
              ポジティブな感情を増やし、幸せの総量に貢献できるようなサービス、例えば、
            </p>
            <ul className="text-white">
              <li>時間を奪うのではなく生み出す</li>
              <li>依存させるのではなく自由にする</li>
            </ul>
            <p>そんなサービスが好きです。</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Heading as="h2" size="h6" id="what-i-can-do">
          What I can do
        </Heading>
        <Heading as="h3" size="h2" className="mt-4">
          丁寧で持続可能な
          <br />
          Webサービス開発
        </Heading>
        <div className="mt-8 text-center prose">
          <div className="inline-block text-left">
            <p>
              小~中規模のWebサービス設計・開発が得意で、
              <br />
              特に、制作の目的や果たすべき役割を大事にしています。
            </p>
            <ul>
              <li>企画、要件定義</li>
              <li>デザイン、設計</li>
              <li>フロントエンド/バックエンド開発</li>
              <li>インフラ構築、運用</li>
              <li>リサーチ、改善</li>
            </ul>
            まで一気通貫で担当します。
            <p>
              お困りごとがあったり、サービスを作りたいという方は、ぜひご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container max-w-[700px]">
        <Heading as="h2" id="about">
          About
        </Heading>
        <Profile />
        <div className="mt-8 text-center">
          <ButtonLink href="/about" theme="secondary">
            More About Me
          </ButtonLink>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Heading as="h2" id="posts">
          Posts
        </Heading>
        <div className="grid gap-6 mt-4 lg:mt-8">
          {posts.map(post => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
        <div className="mt-8 text-center lg:mt-12">
          <ButtonLink href="/blog" theme="secondary">
            See All Posts
          </ButtonLink>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Heading as="h2" id="works">
          Works
        </Heading>
        <p className="mt-8 text-center">Now Developing...🛠</p>
      </div>
    </section>
  </Layout>
)

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

  if (process.env.NODE_ENV !== 'development') await generatedRssFeed()

  return {
    props: { posts: recentPosts },
  }
}
