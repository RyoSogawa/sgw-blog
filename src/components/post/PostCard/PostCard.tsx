import React from 'react';

import cn from 'classnames';
import Link from 'next/link';

import { convertToDistance } from '../../../lib/datetime';
import TagLabel from '../TagLabel';

import type Post from '../../../types/post';

export type PostCardProps = {
  className?: string;
  post: Omit<Post, 'content'>;
  headingTag?: 'h2' | 'h3';
};

const PostCard: React.VFC<PostCardProps> = ({ className, post, headingTag = 'h2' }) => {
  const { emoji, publishedAt, slug, tags, title } = post;
  const formattedPublishedAt = convertToDistance(publishedAt);
  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          className,
          'block rounded bg-darkBlue/60 py-5 px-6 transition-[transform,box-shadow] ease-out',
          'hover:-translate-y-0.5 hover:shadow-xl',
        )}
      >
        <article>
          <div className="flex items-center">
            <div className="mr-3 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white leading-none fsz-13ptr">
              {emoji}
            </div>
            <div className="">
              <time dateTime={publishedAt} className="block font-inter text-white fsz-10ptr">
                {formattedPublishedAt}
              </time>
              <div className="mt-1 grid grid-flow-col gap-2">
                {tags.map((tag) => (
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
  );
};

export default PostCard;
