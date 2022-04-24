import styles from './PageLoading.scss';

const PageLoading: React.FC = () => {
  return (
    <>
      <div className={styles['loading-inner']}>
        <div className={styles['loading-cover']}></div>
      </div>
    </>
  );
};

export default PageLoading;
