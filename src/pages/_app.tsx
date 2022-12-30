import { type AppType } from 'next/dist/shared/lib/utils'
import { Poppins } from '@next/font/google'
import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'
import NextNProgress from 'nextjs-progressbar'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  preload: true,
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="PokeNext" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress
        color="rgb(94 234 212)"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <main className={`${poppins.className} min-h-screen`}>
        <Header />
        <div className={'container mx-auto py-10 px-5'}>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}

export default MyApp
