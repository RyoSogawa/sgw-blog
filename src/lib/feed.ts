/**
 * @see https://fwywd.com/tech/next-feed-rss-atom
 */
import fs from 'fs'
import { Feed } from 'feed'
import { getAllPosts } from './api'
import markdownToHtml from './markdownToHtml'
import { htmlToDesc } from './utils'

// TODO: link
const generatedRssFeed = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const date = new Date()
  const author = {
    name: 'Ryo Sogawa',
    email: 'koashimitekara.1122@gmail.com',
    link: 'https://...com',
  }

  const feed = new Feed({
    title: process.env.NEXT_PUBLIC_BASE_NAME || '',
    description: process.env.NEXT_PUBLIC_BASE_DISC,
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
  })

  const posts = getAllPosts(['title', 'slug', 'content', 'publishedAt'])

  const formattedPosts = await Promise.all(
    posts.map(async post => {
      const url = `${baseUrl}/blog/${post.slug}`
      const htmlContent = await markdownToHtml(post.content)
      const desc = htmlToDesc(htmlContent)
      return {
        title: post.title,
        description: desc,
        id: url,
        link: url,
        content: htmlContent,
        date: new Date(post.publishedAt),
      }
    })
  )

  formattedPosts.forEach(post => {
    feed.addItem(post)
  })

  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  // fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  // fs.writeFileSync('./public/rss/feed.json', feed.json1())
}

export default generatedRssFeed
