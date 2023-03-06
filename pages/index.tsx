import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import HomePage from '@/components/Home'
import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
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
