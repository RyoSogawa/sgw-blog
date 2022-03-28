import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

export type ButtonLinkProps = {
  href: string
  className?: string
  theme?: 'primary' | 'secondary'
  shadow?: boolean
  children?: React.ReactNode
}

const ButtonLink: React.VFC<ButtonLinkProps> = ({
  href,
  children,
  theme = 'primary',
  shadow,
  className,
}) => {
  const isExternal = href.startsWith('http')
  const classNames = cn(
    className,
    'inline-block py-2 px-6 min-w-[170px] font-inter font-medium text-center rounded border fsz-16ptr',
    'transition-colors duration-200',
    theme === 'primary' &&
      'text-white bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600',
    theme === 'secondary' &&
      'text-black hover:text-white bg-white hover:bg-transparent border-white',
    shadow && 'shadow',
    shadow && theme === 'primary' && 'shadow-blue-500'
  )

  if (isExternal) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href}>
      <a className={classNames}>{children}</a>
    </Link>
  )
}

export default ButtonLink
