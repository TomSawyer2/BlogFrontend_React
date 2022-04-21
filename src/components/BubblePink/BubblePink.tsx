import styles from './BubblePink.less';

const BubblePink = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bubble}></div>
        <div className={styles.shadow}></div>
      </div>
    </>
  );
};

export default BubblePink;
