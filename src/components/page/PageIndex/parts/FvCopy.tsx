import React from 'react';

import cn from 'classnames';

export type FvCopyProps = {
  className?: string;
};

const FvCopy: React.VFC<FvCopyProps> = ({ className }) => (
  <div className={cn(className, 'container grid h-screen place-items-center overflow-hidden')}>
    <blockquote className="relative text-center font-inter text-[clamp(56px,10vw,110px)] font-bold leading-[1.1] tracking-tight mix-blend-difference">
      <span className="-ml-20 block">“Everything </span>
      <span className="-ml-2 block">in It’s </span>
      <span className="ml-20 block">Right Place”</span>
      <span className="absolute -bottom-12 left-0 block font-extralight tracking-wider fsz-11ptr md:fsz-14ptr">
        - Radiohead 2000
      </span>
    </blockquote>
  </div>
);

export default FvCopy;
