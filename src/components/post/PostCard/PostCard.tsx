import type Post from '../../../types/post'
import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import TagLabel from '../TagLabel'
import { convertToDistance } from '../../../lib/datetime'

export type PostCardProps = {
  className?: string
  post: Omit<Post, 'content'>
  headingTag?: 'h2' | 'h3'
}

const PostCard: React.VFC<PostCardProps> = ({
  className,
  post,
  headingTag = 'h2',
}) => {
  const { emoji, publishedAt, slug, tags, title } = post
  const formattedPublishedAt = convertToDistance(publishedAt)
  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          className,
          'block py-5 px-6 bg-darkBlue/60 rounded transition-[transform,box-shadow] ease-out',
          'hover:shadow-xl hover:-translate-y-0.5'
        )}
      >
        <article>
          <div className="flex items-center">
            <div className="grid shrink-0 place-items-center mr-3 w-9 h-9 leading-none bg-white rounded-full fsz-13ptr">
              {emoji}
            </div>
            <div className="">
              <time
                dateTime={publishedAt}
                className={'block font-inter text-white fsz-10ptr'}
              >
                {formattedPublishedAt}
              </time>
              <div className="grid grid-flow-col gap-2 mt-1">
                {tags.map(tag => (
                  <TagLabel key={tag}>{tag}</TagLabel>
                ))}
              </div>
            </div>
          </div>
          {headingTag === 'h2' ? (
            <h2 className="mt-5 text-white fsz-18ptr">{title}</h2>
          ) : (
            <h3 className="mt-5 text-white fsz-18ptr">{title}</h3>
          )}
        </article>
      </a>
    </Link>
  )
}

export default PostCard
