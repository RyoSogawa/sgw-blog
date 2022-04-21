import React from 'react'
import cn from 'classnames'

export type FvCopyProps = {
  className?: string
}

const FvCopy: React.VFC<FvCopyProps> = ({ className }) => (
  <div
    className={cn(
      className,
      'container grid overflow-hidden place-items-center h-screen'
    )}
  >
    <blockquote className="relative font-inter font-bold tracking-tight leading-[1.1] text-center mix-blend-difference text-[clamp(56px,10vw,110px)]">
      <span className="block -ml-20">“Everything </span>
      <span className="block -ml-2">in It’s </span>
      <span className="block ml-20">Right Place”</span>
      <span className="block absolute -bottom-12 left-0 font-extralight tracking-wider fsz-11ptr md:fsz-14ptr">
        - Radiohead 2000
      </span>
    </blockquote>
  </div>
)

export default FvCopy
