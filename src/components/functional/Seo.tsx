import React from 'react';

import { NextSeo } from 'next-seo';

import { SITE_URL } from '../../../next-seo.config';

import type { NextSeoProps } from 'next-seo';

export type SeoProps = Omit<NextSeoProps, 'canonical'> & {
  pathName?: string;
};

const Seo = ({ pathName = '', ...props }: SeoProps): JSX.Element => {
  const url = SITE_URL + pathName;

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
  );
};

export default Seo;
