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

  const articles = [
    {
      id: 1,
      title: 'title1',
      imgUrl:
        'https://upload-bbs.mihoyo.com/upload/2022/04/14/185457537/639aa9f7a87f213ddf2b8dec8e78e618_1838311572671821665.png',
    },
    {
      id: 2,
      title: 'title2',
      imgUrl:
        'https://upload-bbs.mihoyo.com/upload/2022/04/16/275770496/f3f7cd2a5c91a5eed0c77943da542a96_2209510940476113906.jpg',
    },
    {
      id: 3,
      title: 'title3',
      imgUrl:
        'https://upload-bbs.mihoyo.com/upload/2022/04/15/17163434/15fa8cff8e82f0a74c98e9b4ad44130f_408112695012360631.jpg',
    },
    { id: 4, title: 'title4' },
  ];

  return (
    <>
      <div
        className={style.mainarticles}
        style={{
          scrollSnapType: shouldScroll ? 'y mandatory' : 'none',
          overflowY: shouldScroll ? 'scroll' : 'hidden',
        }}
      >
        {articles.map((article) => {
          return (
            <Article
              mykey={article.id}
              title={article.title}
              imgUrl={article?.imgUrl}
              key={article.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default MainArticles;
