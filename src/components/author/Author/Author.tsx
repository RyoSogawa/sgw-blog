import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import FaceImg from '../../../../public/images/face.jpg'

export type AuthorProps = {
  className?: string
  imageType?: 'logo' | 'photo'
}

const Author: React.VFC<AuthorProps> = ({ className, imageType = 'logo' }) => (
  <div className={cn(className, 'text-center')}>
    {imageType === 'logo' ? (
      <img
        className="block mx-auto w-12 h-12"
        src="/images/svg/dinosaur_record_rectangle.svg"
        alt=""
        width={48}
        height={48}
        loading="lazy"
      />
    ) : (
      <Image
        className="mx-auto w-16 h-16 rounded-full"
        src={FaceImg}
        placeholder="blur"
        alt=""
        width={68}
        height={68}
      />
    )}
    <strong className="block mt-3 font-inter font-bold text-white fsz-24ptr">
      Ryo Sogawa
    </strong>
    <ul className="mt-3 font-inter font-extralight fsz-12ptr">
      <li>Application Architect</li>
      <li>Web Engineer</li>
      <li>UI Designer</li>
    </ul>
  </div>
)

export default Author
