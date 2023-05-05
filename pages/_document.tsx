import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <meta name="description" content="Antonella Digital Design"/>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
