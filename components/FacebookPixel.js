// components/FacebookPixel.js
import { useEffect } from 'react';

const FacebookPixel = ({ pixelId }) => {
  useEffect(() => {
    const loadFacebookPixel = async () => {
      if (typeof window !== 'undefined') {
        console.log("Initializing Facebook Pixel"); // Log when initializing
        const ReactPixel = (await import('react-facebook-pixel')).default;
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      }
    };
    loadFacebookPixel();
  }, [pixelId]);  

  return null; // This component does not render anything
};

export default FacebookPixel;
