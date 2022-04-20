import ArticleContent from '../Article/ArticleContent';
import Bubbles from '../Bubble';
import style from './ArticleBrief.css';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import { Anchor } from 'antd';
import { createContext, useContext, useMemo, useState } from 'react';

interface ArticleBriefProps {
  title: string;
  brief: string;
  tags: string[];
  mykey: number;
  fullscreen: boolean;
  id: number;
  isVisible: boolean;
}

export const articleNavContext = createContext({});

const ArticleBrief: React.FC<ArticleBriefProps> = (props) => {
  // const mainColor = getDominantColor(document.getElementById(`img${props.mykey}`)).r;
  const [articleNav, setArticleNav] = useState<any>('');
  const articleNavContextMemo = useMemo(
    () => ({
      articleNav,
      setArticleNav,
    }),
    [articleNav],
  );
  return (
    <>
      <Bubbles mainColor={'#66ccff'} />
      {props.fullscreen ? (
        <articleNavContext.Provider value={articleNavContextMemo}>
          <div className={style.articleContent}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
              className={style.markNav}
            >
              <Anchor>
                <MarkNav
                  source={articleNav}
                  headingTopOffset={80}
                  className={style.markNav_inner}
                  id="mdnavbar"
                />
              </Anchor>
            </div>

            <div
              className={style.articleContent_box}
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
            >
              <div className={style.articleContent_header}>
                <span className={style.title_fs}>{props.title}</span>
                <span className={style.brief_fs}>{props.brief}</span>
                <span className={style.tag_fs}>{props.tags}</span>
              </div>
              <ArticleContent id={props.id} isVisible={props.isVisible} />
            </div>
          </div>
        </articleNavContext.Provider>
      ) : (
        <div className={style.articleBrief}>
          <span className={style.title}>{props.title}</span>
          <span className={style.brief}>{props.brief}</span>
          <span className={style.tag}>{props.tags}</span>
        </div>
      )}
    </>
  );
};
export default ArticleBrief;
