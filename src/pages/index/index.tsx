import styles from './index.css';
import ParallaxBanner from '@/components/ParallaxBanner';
import MetaInfoPage from '@/components/MetaInfo/MetaInfoPage';

export default function IndexPage() {
  return (
    <>
      <div className={styles}>
        <ParallaxBanner />
      </div>
      <MetaInfoPage
        tags="TomSawyer2, Blog"
        title={`TomSawyer2's Blog`}
        imgUrl={`https://cloudreve-hanserena.oss-cn-hangzhou.aliyuncs.com/pics/venti.jpg`}
      />
    </>
  );
}
