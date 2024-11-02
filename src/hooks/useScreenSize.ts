import {
  useState,
  useEffect,
} from 'react';

const useScreenSize = () => {
  const [ screenSize, setScreenSize ] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isXs: screenSize < 576,
    isSm: screenSize < 768,
    isMd: screenSize < 992,
    isLg: screenSize < 1200,
    isXl: screenSize >= 1200,
  };
};

export default useScreenSize;