import styles from './index.css';
import ParallaxBanner from '@/components/ParallaxBanner';

export default function IndexPage(this: any) {
  return (
    <>
      <ParallaxBanner className={styles} />
    </>
  );
}
