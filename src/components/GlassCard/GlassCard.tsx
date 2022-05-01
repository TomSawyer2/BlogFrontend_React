import styles from './GlassCard.less';

interface GlassCardProps {
  tags: tag[];
}

const GlassCard: React.FC<GlassCardProps> = (props) => {
  return (
    <div className={styles.container}>
      {props.tags.map((tag: tag) => (
        <div className={styles.box} style={{ '--bgurl': `url(${tag.imgUrl})` }}>
          <span></span>
          <div className={styles.content}>
            <p className={styles.text}>{tag.name}</p>
            <p>{tag.color}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlassCard;
