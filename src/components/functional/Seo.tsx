import React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import { SITE_URL } from '../../../next-seo.config'

export type SeoProps = Omit<NextSeoProps, 'canonical'> & {
  pathName?: string
}

const Seo = ({ pathName = '', ...props }: SeoProps): JSX.Element => {
  const url = SITE_URL + pathName

  return (
    <NextSeo
      {...props}
      canonical={url}
      openGraph={{
        url,
        type: pathName ? 'article' : 'website',
        ...props.openGraph,
      }}
    />
  )
}

export default Seo
