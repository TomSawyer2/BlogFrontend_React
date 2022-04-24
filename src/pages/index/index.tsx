import styles from './index.css';
import ParallaxBanner from '@/components/ParallaxBanner';
import useMetaTags from 'react-metatags-hook';

export default function IndexPage(this: any) {
  useMetaTags({
    description: `TomSawyer2's Blog`,
    metas: [
      { name: 'keywords', content: `TomSawyer2, Blog` },
      { name: 'url', content: `${location.href}` },
    ],
    openGraph: {
      title: `TomSawyer2's Blog`,
      type: 'article',
      image: `https://blog.tomsawyer2.xyz/pics/github_avatar.jfif`,
      site_name: '博客 - TomSawyer2',
    },
  });
  return (
    <>
      <ParallaxBanner className={styles} />
    </>
  );
}
