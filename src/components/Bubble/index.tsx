import styles from './index.css';

interface BubblesProps {
  mainColor: string;
}

const Bubbles: React.FC<BubblesProps> = (props) => {
  return (
    <div className={styles.bubbles}>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
      <div
        className={styles.bubble}
        style={{ background: props.mainColor }}
      ></div>
    </div>
  );
};

export default Bubbles;
