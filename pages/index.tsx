import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import HomePage from '@/components/Home'
import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
      <title>Antonella Design</title>
    </Head>
    <div>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
    </>
  )
}
