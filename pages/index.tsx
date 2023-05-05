import Head from 'next/head'
import dynamic from 'next/dynamic';

const DynamicHomePage = dynamic(() =>
  import('@/components/Home').then((mod) => mod.HomePage),{ssr:false}
);


export default function Home() {  
  return (
    <>
    <Head>
    <title>Antonella Design</title>
    </Head>
    <DynamicHomePage/>
    </>
  )
}
