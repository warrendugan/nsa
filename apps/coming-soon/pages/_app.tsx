import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.scss'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nottingham Sheriff App</title>
        <meta name="title" content="Nottingham Sheriff App" />
        <meta name="description" content="A safe place for the common person on the internet." />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default CustomApp
