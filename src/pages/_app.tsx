import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import BgGradient from '../components/common/BgGradient'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Ryo Sogawa</title>
      </Head>
      <div className={'fixed top-0 left-0 z-hide w-screen h-screen'}>
        <BgGradient
          bgColorClassNames={['bg-lightGreen', 'bg-yellow-600', 'bg-pink-500']}
        />
      </div>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
