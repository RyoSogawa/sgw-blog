import { getAllPosts } from '../lib/api'
import Head from 'next/head'
// import Post from '../types/post'

// type Props = {
//   allPosts: Post[]
// }
//{ allPosts }: Props
const Index = () => {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <div>
        <Head>
          <title>Next.js Blog Example with</title>
        </Head>
        <div>
          {/*{heroPost && (*/}
          {/*  <HeroPost*/}
          {/*    title={heroPost.title}*/}
          {/*    coverImage={heroPost.coverImage}*/}
          {/*    date={heroPost.date}*/}
          {/*    author={heroPost.author}*/}
          {/*    slug={heroPost.slug}*/}
          {/*    excerpt={heroPost.excerpt}*/}
          {/*  />*/}
          {/*)}*/}
          {/*{morePosts.length > 0 && <MoreStories posts={morePosts} />}*/}
        </div>
      </div>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'tags',
    'emoji',
    'publishedAt',
  ])

  return {
    props: { allPosts },
  }
}
