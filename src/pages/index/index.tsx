import styles from './index.css';
import ParallaxBanner from '@/components/ParallaxBanner';
// import NavigationBar from '@/components/NavigationBar';
// import MainArticles from '@/components/MainArticles';
// import { useEffect, useState } from 'react';

export default function IndexPage(this: any) {
  // const [offsetTop, setOffsetTop] = useState<number>(0);
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {};
  // }, []);

  // const handleScroll = () => {
  //   setOffsetTop(window.scrollY);
  // };

  return (
    <>
      {/* <NavigationBar offsetTop={offsetTop} /> */}
      <ParallaxBanner className={styles} />
    </>
  );
}
