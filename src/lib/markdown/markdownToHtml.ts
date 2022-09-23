/* eslint-disable @typescript-eslint/no-var-requires */
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import slug from 'remark-slug';
import remarkToc from 'remark-toc';
import { unified } from 'unified';

const rehypeFigure = require('rehype-figure');
const shiki = require('rehype-shiki');

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // markdown -> mdast
    .use(slug)
    .use(remarkToc, { heading: '目次', tight: true, maxDepth: 3 })
    .use(remarkRehype, { allowDangerousHtml: true }) // mdast -> hast
    .use(rehypeFigure, { className: 'figure' })
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      content: {
        type: 'element',
        tagName: 'span',
        properties: {
          className: 'ml-2 opacity-50 font-inter transition-opacity hover:opacity-80',
        },
        children: [
          {
            type: 'text',
            value: '#',
          },
        ],
      },
    })
    .use(shiki, { theme: 'hc_black' })
    .use(rehypeFormat)
    .use(rehypeStringify, { allowDangerousHtml: true }) // hast -> html
    .process(markdown);
  return result.toString();
}
