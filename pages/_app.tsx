import type { AppProps } from 'next/app'
import "../styles/globals.css"
import "../styles/form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot} from 'recoil';
import { Analytics } from '@vercel/analytics/react';
// import { Inter } from "next/font/google"
// import { Roboto } from "next/font/google"
import { Poppins } from "next/font/google"

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// });

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
//   variable: '--font-roboto',
// });

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

console.log(poppins, "poppins");

export default function App({ Component, pageProps }: AppProps) {
  return<>
   <main className={poppins.className}>
      <RecoilRoot>
      <Component {...pageProps} />
      <Analytics />
    </RecoilRoot>
   </main>
    
  </>

}
