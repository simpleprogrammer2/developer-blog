import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import TagManager from 'react-gtm-module'

export default function Nextra({ Component, pageProps }) {
  const tagManagerArgs = {
    gtmId: 'GTM-TVBFM3J'
  };
  if (process.browser) {
    TagManager.initialize(tagManagerArgs);
  }
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
