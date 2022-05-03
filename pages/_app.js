import '../styles/globals.css'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title>Journal Indexing Checker</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&family=Russo+One&display=swap" rel="stylesheet" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YC9DVSEFQT"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YC9DVSEFQT');
          `}
        </Script>
    </Head>
    <NextNProgress height={7} />
    <Component {...pageProps} />
  </>
}

export default MyApp
