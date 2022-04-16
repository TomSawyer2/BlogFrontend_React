import style from './index.css';
import Article from './Article';
import { useState } from 'react';

const MainArticles: React.FC<any> = () => {
  const [shouldScroll, setScroll] = useState<Boolean>(false);
  const observeEl: any = document.getElementById('parallaxBanner');
  const io = new IntersectionObserver((entries) => {
    setScroll(!entries[0].isIntersecting);
  });
  if (observeEl !== null) io.observe(observeEl);

  return (
    <>
      <div
        className={style.mainarticles}
        style={{
          scrollSnapType: shouldScroll ? 'y mandatory' : 'none',
          overflowY: shouldScroll ? 'scroll' : 'hidden',
        }}
      >
        <Article />
        <Article />
        <Article />
      </div>
    </>
  );
};

export default MainArticles;
