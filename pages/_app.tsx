import type { AppProps } from 'next/app'
import "../styles/globals.css"
import "../styles/form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import { RecoilRoot} from 'recoil';
import { Analytics } from '@vercel/analytics/react'
;


export default function App({ Component, pageProps }: AppProps) {
  return<>
    <Suspense fallback={"loading..."}>
    <RecoilRoot>
      <Component {...pageProps} />
      <Analytics />
    </RecoilRoot>
  </Suspense>
  </>

}
