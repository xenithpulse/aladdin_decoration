// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';
import Loader from '@/components/Loader'; // Import your Loader component
<<<<<<< HEAD
import * as fbq from "@/lib/fpixel";
import Script from 'next/script';
import FacebookPixel from '@/components/FacebookPixel';


=======
>>>>>>> 10188aee1844228adf8815497eee5483e51b749f

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif; // Only include Montserrat since it's now in _document.js
  }
`;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

<<<<<<< HEAD

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);



=======
>>>>>>> 10188aee1844228adf8815497eee5483e51b749f
  return (
    <>
      <GlobalStyles />
      {loading && <Loader />} {/* Show loader when loading */}
      <CartContextProvider>
<<<<<<< HEAD
              {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
        <FacebookPixel />
=======
>>>>>>> 10188aee1844228adf8815497eee5483e51b749f
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
