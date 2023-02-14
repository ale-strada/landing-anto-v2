import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Header } from '@/components/header'
import { About } from '@/components/about'
import { Servicios } from '@/components/servicios'
import { Objetivo } from '@/components/objetivo'
import { Faqs } from '@/components/faqs'
import { Cartel } from '@/components/cartel'
import ContactForm from '@/components/contact-form'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <Header/>
      <About/>
      <Servicios/>
      <Objetivo/>
      <Faqs/>
      <Cartel/>
      <ContactForm/>
    </div>
    </>
  )
}
