import { type AppType } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'
import NextNProgress from 'nextjs-progressbar'
import { Container, useTheme } from '@nextui-org/react'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  const theme = useTheme()
  return (
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
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
          <Container
            fluid
            responsive={false}
            display="flex"
            direction="column"
            css={{
              minHeight: '100vh',
              p: 0,
            }}
          >
            <Header />
            <hr
              style={{
                background: theme.theme?.colors.green800.value,
                margin: `0px ${theme.theme?.space[15]}`,
              }}
            />
            <Container
              fluid
              display="flex"
              direction="column"
              css={{
                flexGrow: 1,
                py: '$15',
              }}
            >
              <Component {...pageProps} />
            </Container>
          </Container>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  )
}

export default MyApp
