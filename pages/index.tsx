import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Header } from '@/components/header'
import { About } from '@/components/about'
import { Servicios } from '@/components/servicios'
import { Objetivo } from '@/components/objetivo'
import { Faqs } from '@/components/faqs'
import { Cartel } from '@/components/cartel'
import ContactForm from '@/components/contact-form'
import { Footer } from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <Header/>
      <About/>
      <Servicios/>
      <Objetivo/>
      <Faqs/>
      <Cartel/>
      <ContactForm/>
      <Footer/>
    </div>
    </>
  )
}
