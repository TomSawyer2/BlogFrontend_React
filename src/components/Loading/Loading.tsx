import styles from './Loading.less';

const LoadingEffect: React.FC<any> = () => {
  const valueSVG = `
    1 0 0 0 0
    0 1 0 0 0
    0 0 1 0 0
    0 0 0 20 -10
    `;
  return (
    <>
      <div className={styles.loader}>
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
        <span style={{ '--i': 4 }}></span>
        <span style={{ '--i': 5 }}></span>
        <span style={{ '--i': 6 }}></span>
        <span style={{ '--i': 7 }}></span>
      </div>
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix values={valueSVG} />
        </filter>
      </svg>
    </>
  );
};

export default LoadingEffect;
