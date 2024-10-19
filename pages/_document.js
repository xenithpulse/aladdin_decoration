// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
<<<<<<< HEAD
import { FB_PIXEL_ID } from '@/lib/fpixel';
=======
>>>>>>> 10188aee1844228adf8815497eee5483e51b749f

export default function Document() {
  return (
    <Html lang="en">
      <Head>
<<<<<<< HEAD
      <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
=======
>>>>>>> 10188aee1844228adf8815497eee5483e51b749f
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
