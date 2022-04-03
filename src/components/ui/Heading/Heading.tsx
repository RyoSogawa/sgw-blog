import React from 'react'
import cn from 'classnames'

export type HeadingProps = {
  className?: string
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

const Heading: React.VFC<HeadingProps> = ({
  className,
  as,
  size = as,
  children,
}) => {
  const fontSizeClasses: { [k in HeadingProps['as']]: string } = {
    h1: 'fsz-48ptr',
    h2: 'fsz-40ptr',
    h3: 'fsz-36ptr',
    h4: 'fsz-32ptr',
    h5: 'fsz-28ptr',
    h6: 'fsz-24ptr',
  }
  const fontSizeClass = fontSizeClasses[size]
  const baseClass = `font-inter font-bold text-white ${fontSizeClass}`

  const element: { [k in HeadingProps['as']]: JSX.Element } = {
    h1: <h1 className={cn(baseClass, className)}>{children}</h1>,
    h2: <h2 className={cn(baseClass, className)}>{children}</h2>,
    h3: <h3 className={cn(baseClass, className)}>{children}</h3>,
    h4: <h4 className={cn(baseClass, className)}>{children}</h4>,
    h5: <h5 className={cn(baseClass, className)}>{children}</h5>,
    h6: <h6 className={cn(baseClass, className)}>{children}</h6>,
  }

  return element[as]
}

export default Heading
