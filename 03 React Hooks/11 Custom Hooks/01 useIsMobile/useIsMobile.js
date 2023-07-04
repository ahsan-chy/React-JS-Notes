import { useEffect, useState } from 'react';

export const MOBILE_BREAKDOWN = 768;

const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= MOBILE_BREAKDOWN;
};

export default useIsMobile;
