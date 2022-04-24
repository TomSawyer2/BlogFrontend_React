import BubblePink from '@/components/BubblePink/BubblePink';
import Card from '@/components/Card/Card';
import FriendCard from '@/components/Card/FriendCard';
import GitHubCard from '@/components/Card/GitHubCard';
import Wave from '@/components/Wave/Wave';
import useMetaTags from 'react-metatags-hook';
import styles from './personal.less';

const Personal: React.FC = () => {
  useMetaTags({
    description: `Personal page of TomSawyer2's Blog`,
    metas: [
      { name: 'keywords', content: `personal page` },
      { name: 'url', content: `${location.href}` },
    ],
    openGraph: {
      title: `Personal page of TomSawyer2's Blog`,
      type: 'article',
      image: `https://blog.tomsawyer2.xyz/pics/github_avatar.jfif`,
      site_name: '博客 - TomSawyer2',
    },
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <BubblePink />
        </div>
        <div className={styles.waveContainer}>
          <Wave />
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardContainer_top}>
            <Card />
            <GitHubCard />
          </div>
          <div className={styles.cardContainer_bottom}>
            <FriendCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
