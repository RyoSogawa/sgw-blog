import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkToc from 'remark-toc'
import slug from 'remark-slug'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const shiki = require('rehype-shiki')

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(slug)
    .use(remarkToc, { heading: '目次', tight: true, maxDepth: 3 })
    .use(remarkRehype)
    .use(shiki, { theme: 'hc_black' })
    .use(rehypeDocument, { title: 'Contents' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
