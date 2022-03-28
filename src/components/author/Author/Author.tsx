import React from 'react'
import cn from 'classnames'

export type AuthorProps = {
  className?: string
}

const Author: React.VFC<AuthorProps> = ({ className }) => {
  return (
    <div className={cn(className, 'text-center')}>
      <img
        className={'mx-auto w-12 h-12'}
        src={'/images/svg/dinosaur_record_rectangle.svg'}
        alt=""
        width={48}
        height={48}
        loading={'lazy'}
      />
      <strong className="block mt-3 font-inter font-bold text-white fsz-24ptr">
        Ryo Sogawa
      </strong>
      <ul className="mt-3 font-inter font-extralight fsz-12ptr">
        <li>System Director</li>
        <li>Web Engineer</li>
        <li>UI Designer</li>
      </ul>
    </div>
  )
}

export default Author
