import ArticleContent from '../Article/ArticleContent';
import Bubbles from '../Bubble';
import style from './ArticleBrief.css';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import { Anchor } from 'antd';
import { createContext, useEffect, useMemo, useState } from 'react';
import CircleMenu from '../CircleMenu/CircleMenu';
import QRCode from '../QRCode/QRCode';

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
  const [hElements, sethElements] = useState<any>([]);
  useEffect(() => {
    const hElments = [
      ...document.getElementsByTagName('h1'),
      ...document.getElementsByTagName('h2'),
      ...document.getElementsByTagName('h3'),
      ...document.getElementsByTagName('h4'),
    ];
    sethElements(Array.from(hElments));
  }, [articleNav]);

  const [QRCodeStatus, setQRCodeStatus] = useState<boolean>(false);

  useEffect(() => {
    if (!props.fullscreen) setQRCodeStatus(false);
  }, [props.fullscreen]);

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
              {/* <Anchor>
                <MarkNav
                  source={articleNav}
                  headingTopOffset={80}
                  className={style.markNav_inner}
                  id="mdnavbar"
                  onNavItemClick={(
                    event: Event,
                    elememt: Element,
                    hashValue: string,
                  ) => {
                    hElments.forEach((item: any) => {
                      if (item.getAttribute('data-id') === hashValue) {
                        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        return;
                      }
                    });
                  }}
                />
              </Anchor> */}
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
            <div
              style={{ position: 'absolute', bottom: '100px', right: '100px' }}
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
            >
              <CircleMenu
                QRCodeStatus={QRCodeStatus}
                setQRCodeStatus={setQRCodeStatus}
              />
            </div>
            {QRCodeStatus ? <QRCode anchor={props.title} /> : null}
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
