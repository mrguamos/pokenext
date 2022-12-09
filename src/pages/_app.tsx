import { type AppType } from 'next/dist/shared/lib/utils'
import { Poppins } from '@next/font/google'

import '../styles/globals.css'
import Header from '../components/Header'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  preload: true,
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${poppins.className} min-h-screen`}>
      <Header />
      <div className={'spx-10 container mx-auto py-10 px-5 md:px-0'}>
        <Component {...pageProps} />
      </div>
    </main>
  )
}

export default MyApp
