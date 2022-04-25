import type { NextSeoProps } from 'next-seo'

export const SITE_URL = 'https://www.example.com'
export const SITE_NAME = 'RyoSogawa'
export const SITE_DESC = 'default description'

export const SEO: NextSeoProps = {
  title: undefined,
  titleTemplate: `%s｜${SITE_NAME}`,
  defaultTitle: SITE_NAME,
  description: SITE_DESC,
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'ja',
    url: SITE_URL,
    title: SITE_NAME,
    site_name: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/ogp.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    handle: '@RyoSogawa',
    site: '@sgw123456',
    cardType: 'summary',
  },
}
