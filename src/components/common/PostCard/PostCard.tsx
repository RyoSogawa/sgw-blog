import React from 'react';

import cn from 'classnames';

import { convertToDistance } from '../../../utils/datetime';
import { getFaviconSrcFromOrigin } from '../../../utils/helpers';

import type { PostItem } from '../../../type';

export type PostCardProps = {
  className?: string;
  post: PostItem;
  headingTag?: 'h2' | 'h3';
};

const PostCard: React.VFC<PostCardProps> = ({ className, post, headingTag = 'h2' }) => {
  const { isoDate, link, title } = post;
  const formattedPublishedAt = isoDate ? convertToDistance(isoDate) : 'unknown';
  const { hostname, origin } = new URL(link);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={cn(
        className,
        'block rounded bg-darkBlue/60 py-5 px-6 transition-[transform,box-shadow] ease-out',
        'hover:-translate-y-0.5 hover:shadow-xl',
      )}
    >
      <article>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src={getFaviconSrcFromOrigin(origin)}
              width={14}
              height={14}
              className="h-[14px] w-[14px]"
              alt={hostname}
            />
            <span className="font-inter fsz-14ptr">{hostname}</span>
          </div>
          <time dateTime={isoDate} className="block font-inter text-white fsz-11ptr">
            {formattedPublishedAt}
          </time>
        </div>
        {headingTag === 'h2' ? (
          <h2 className="mt-5 text-white fsz-18ptr">{title}</h2>
        ) : (
          <h3 className="mt-5 text-white fsz-18ptr">{title}</h3>
        )}
      </article>
    </a>
  );
};

export default PostCard;
