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

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#242424" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nottinghamsheriff.app" />
        <meta property="og:title" content="Nottingham Sheriff App" />
        <meta property="og:description" content="A safe place for the common person on the internet." />
        <meta property="og:image" content="https://nottinghamsheriff.app/award-outline-hero.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nottinghamsheriff.app" />
        <meta property="twitter:title" content="Nottingham Sheriff App" />
        <meta property="twitter:description" content="A safe place for the common person on the internet." />
        <meta property="twitter:image" content="https://nottinghamsheriff.app/award-outline-hero.png" />
      </Head>
      <main>
        <h2>Nottingham Sheriff App</h2>
        <h2>Coming Soon</h2>
      </main>
    </>
  )
}

export default CustomApp
