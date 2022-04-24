import BubblePink from '@/components/BubblePink/BubblePink';
import Card from '@/components/Card/Card';
import FriendCard from '@/components/Card/FriendCard';
import GitHubCard from '@/components/Card/GitHubCard';
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
    </>
  );
};

export default Personal;
