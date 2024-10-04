// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';
import Loader from '@/components/Loader'; // Import your Loader component

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

  return (
    <>
      <GlobalStyles />
      {loading && <Loader />} {/* Show loader when loading */}
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
