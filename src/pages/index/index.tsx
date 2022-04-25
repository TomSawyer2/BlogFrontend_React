import styles from './index.css';
import ParallaxBanner from '@/components/ParallaxBanner';
import MetaInfoPage from '@/components/MetaInfo/MetaInfoPage';

export default function IndexPage(this: any) {
  return (
    <>
      <ParallaxBanner className={styles} />
      <MetaInfoPage
        tags="TomSawyer2, Blog"
        title={`TomSawyer2's Blog`}
        imgUrl={`https://blog.tomsawyer2.xyz/pics/github_avatar.jfif`}
      />
    </>
  );
}
