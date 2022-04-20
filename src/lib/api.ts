import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from '../types/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(
  slug: string,
  fields: Array<keyof PostType> = []
) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items as unknown as PostType
}

export function getAllPosts(fields: Array<keyof PostType> = []) {
  const slugs = getPostSlugs()
  return (
    slugs
      .map(slug => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1))
  )
}
