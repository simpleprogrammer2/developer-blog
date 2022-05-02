import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: 'Enterprise Application Developer',
      description: 'Clone and deploy your own Next.js portfolio in minutes.',
      image:
        'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
    }

    return (
      <Html lang="en">
        <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@alina9675" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          <meta name="google-signin-client_id" content="627433171674-ipfft1f0lom7miko0o8gu2uha6cov9ks.apps.googleusercontent.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="noflash.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
