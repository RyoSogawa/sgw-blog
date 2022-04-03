import React from 'react'
import cn from 'classnames'

export type TagLabelProps = {
  className?: string
  children: React.ReactNode
}

const TagLabel: React.VFC<TagLabelProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        className,
        'inline-flex items-center py-px px-1.5 rounded border border-white opacity-75',
        'font-inter text-white fsz-11ptr'
      )}
    >
      <img
        src="/images/svg/tag.svg"
        alt=""
        width="9"
        height="9"
        loading="lazy"
        className={'mr-1 w-3 h-3 text-white'}
      />
      {children}
    </div>
  )
}

export default TagLabel
