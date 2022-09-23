import '../styles/index.css';

import { NextGtag } from 'next-gtag';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import { SEO } from '../../next-seo.config';
import BgGradient from '../components/common/BgGradient';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ryo Sogawa</title>
      </Head>
      <DefaultSeo {...SEO} />
      <NextGtag trackingId="G-5JCXM1ZQB2" />
      <div className="fixed top-0 left-0 z-hide w-screen h-screen">
        <BgGradient bgColorClassNames={['bg-lightGreen', 'bg-yellow-600', 'bg-pink-500']} />
      </div>
      <Component {...pageProps} />
    </>
  );
}
