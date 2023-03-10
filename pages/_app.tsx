import type { AppProps } from 'next/app'
import "../styles/globals.css"
import "../styles/form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import BorderSpinner from '@/components/spinner';



export default function App({ Component, pageProps }: AppProps) {
  return<Suspense fallback={<BorderSpinner/>}>
    <Component {...pageProps} />
  </Suspense>
}
