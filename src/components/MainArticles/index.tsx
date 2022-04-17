import Article from './Article';
import ReactFullpage from '@fullpage/react-fullpage';
import { useRef } from 'react';
import styles from './index.css';

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

const funcs = new Array(articles.length).fill(null);
const childRefs = new Array(articles.length).fill(null);

const MainArticles: React.FC<any> = () => {
  articles.forEach((val, idx) => {
    const childRef: any = useRef(null);
    childRefs[idx] = childRef;
    const changeVisible = (state: Boolean) => {
      childRefs[idx].current?.handleChange(state);
    };
    funcs[idx] = changeVisible;
  });
  const articleRender = articles.map((article, idx) => {
    return (
      <Article
        mykey={idx}
        title={article.title}
        imgUrl={article?.imgUrl}
        key={article.id}
        ref={childRefs[idx]}
      />
    );
  });
  return (
    <ReactFullpage
      navigation
      autoScrolling
      scrollOverflowReset
      fadingEffect
      onLeave={(origin: any, destination: any) => {
        funcs[origin.index](false);
        funcs[destination.index](true);
      }}
      render={() => {
        return <div>{articleRender}</div>;
      }}
    />
  );
};

export default MainArticles;
