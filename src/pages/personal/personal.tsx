import BubblePink from '@/components/BubblePink/BubblePink';
import Card from '@/components/Card/Card';
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
          <Card />
          <GitHubCard />
        </div>
      </div>
    </>
  );
};

export default Personal;
