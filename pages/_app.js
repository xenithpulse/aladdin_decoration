// pages/_app.js
import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif; // Only include Montserrat since it's now in _document.js
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
