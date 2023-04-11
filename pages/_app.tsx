import type { AppProps } from 'next/app'
import "../styles/globals.css"
import "../styles/form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import BorderSpinner from '@/components/spinner';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


export default function App({ Component, pageProps }: AppProps) {
  return<>
    <Suspense fallback={"loading..."}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </Suspense>
  </>

}
