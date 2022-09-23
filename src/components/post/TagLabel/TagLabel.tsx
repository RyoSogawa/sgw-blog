import React from 'react';

import cn from 'classnames';

export type TagLabelProps = {
  className?: string;
  children: React.ReactNode;
};

const TagLabel: React.VFC<TagLabelProps> = ({ className, children }) => (
  <div
    className={cn(
      className,
      'inline-flex items-center rounded border border-white py-px px-1.5 opacity-75',
    )}
  >
    <img
      src="/images/svg/tag.svg"
      alt=""
      width="9"
      height="9"
      loading="lazy"
      className="mr-1 h-3 w-3 text-white"
    />
    <span className="font-inter text-white line-clamp-1 fsz-11ptr">{children}</span>
  </div>
);

export default TagLabel;
