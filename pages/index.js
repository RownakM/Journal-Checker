import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/sections/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Journal Checker</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&family=Russo+One&display=swap" rel="stylesheet" />
      </Head>
      <Hero />
    </>
  )
}
