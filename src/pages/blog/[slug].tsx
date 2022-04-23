import type { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import type PostType from '../../types/post'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdown/markdownToHtml'
import Layout from '../../components/common/Layout'
import TagLabel from '../../components/post/TagLabel'
import { convertToDistance } from '../../lib/datetime'
import convertFloatingUrlInHtmlToLinkCard from '../../lib/markdown/convertFloatingUrlInHtmlToLinkCard'

type Props = {
  post: PostType
  morePosts: PostType[]
}

const PageBlogSingle: NextPage<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const formattedPublishedAt = convertToDistance(post.publishedAt)

  return router.isFallback ? (
    <div>Loading…</div>
  ) : (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="container pt-32 pb-20 max-w-[732px] prose">
        <div className="grid place-items-center mx-auto w-12 h-12 leading-none bg-white rounded-full not-prose fsz-20ptr">
          {post.emoji}
        </div>
        <h1 className="mt-8">{post.title}</h1>
        <div className="flex items-center not-prose">
          {post.tags.map(tag => (
            <TagLabel key={tag} className="mr-3">
              {tag}
            </TagLabel>
          ))}
          <div className="grow" />
          <time
            dateTime={post.publishedAt}
            className="block font-inter text-white fsz-12ptr"
          >
            {formattedPublishedAt}
          </time>
        </div>
        <div
          className="mt-10"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </Layout>
  )
}

export default PageBlogSingle

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'tags',
    'emoji',
    'publishedAt',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')
  const finalHtml = await convertFloatingUrlInHtmlToLinkCard(content ?? '')

  return {
    props: {
      post: {
        ...post,
        content: finalHtml,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}
