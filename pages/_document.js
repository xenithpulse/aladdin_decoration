// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import { FB_PIXEL_ID } from '@/lib/fpixel';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>     
    </Html>
  );
}
