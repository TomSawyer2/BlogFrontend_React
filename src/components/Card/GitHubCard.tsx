import styles from './GitHubCard.scss';

const GitHubCard = () => {
  return (
    <>
      <div className={styles.githubcardContainer}>
        <img
          style={{
            transform: 'scale(1.5)',
            transition: 'cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s',
          }}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=TomSawyer2&layout=compact"
          alt=""
        />
      </div>
    </>
  );
};

export default GitHubCard;
