import styles from './Loading.less';

const LoadingEffect: React.FC = () => {
  const valueSVG = `
    1 0 0 0 0
    0 1 0 0 0
    0 0 1 0 0
    0 0 0 20 -10
    `;
  return (
    <>
      <div className={styles.loader}>
        <span style={{ '--i': 1 } as React.CSSProperties}></span>
        <span style={{ '--i': 2 } as React.CSSProperties}></span>
        <span style={{ '--i': 3 } as React.CSSProperties}></span>
        <span style={{ '--i': 4 } as React.CSSProperties}></span>
        <span style={{ '--i': 5 } as React.CSSProperties}></span>
        <span style={{ '--i': 6 } as React.CSSProperties}></span>
        <span style={{ '--i': 7 } as React.CSSProperties}></span>
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
