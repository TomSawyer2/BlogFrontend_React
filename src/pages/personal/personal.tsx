import BubblePink from '@/components/BubblePink/BubblePink';
import Card from '@/components/Card/Card';
import FriendCard from '@/components/Card/FriendCard';
import GitHubCard from '@/components/Card/GitHubCard';
import MetaInfoPage from '@/components/MetaInfo/MetaInfoPage';
import Wave from '@/components/Wave/Wave';
import styles from './personal.less';

const Personal: React.FC = () => {
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
      <MetaInfoPage
        tags="personal page"
        title={`TomSawyer2's Blog`}
        imgUrl={`https://blog.tomsawyer2.xyz/pics/github_avatar.jfif`}
      />
      ;
    </>
  );
};

export default Personal;
