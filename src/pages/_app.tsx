import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import BgGradient from '../components/common/BgGradient'
import { SEO } from '../../next-seo.config'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ryo Sogawa</title>
      </Head>
      <DefaultSeo {...SEO} />
      <div className="fixed top-0 left-0 z-hide w-screen h-screen">
        <BgGradient
          bgColorClassNames={['bg-lightGreen', 'bg-yellow-600', 'bg-pink-500']}
        />
      </div>
      <Component {...pageProps} />
    </>
  )
}
