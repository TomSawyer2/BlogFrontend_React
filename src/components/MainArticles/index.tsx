import Article from './Article';
import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import { LegacyRef, RefObject, useContext, useEffect, useState } from 'react';
import Request from '@/apis/request';
import useDynamicRefs from 'use-dynamic-refs';
import { articlesContext } from '@/pages/SubRoute/Layout';

const request = new Request();
const getArticles = async () => {
  const result: any = await request.postData('/getAllArticle', {});
  return result.data;
};

const MainArticles: React.FC = () => {
  const { articles, setArticles } =
    useContext<articlesContextProps>(articlesContext);
  const [render, setRender] = useState<boolean>(false);
  const [getRef, setRef] = useDynamicRefs();
  useEffect(() => {
    const fetchArticles = async () => {
      const result = await getArticles();
      setArticles(result.reverse());
      setRender(true);
    };
    fetchArticles();
    return () => {};
  }, []);

  return render ? (
    <ReactFullpage
      fadingEffect
      animateAnchor
      anchors={articles.map((item: article) => encodeURIComponent(item.title))}
      scrollOverflow={true}
      fitToSection={true}
      normalScrollElements={
        '#articlemd, #mdnavbar, .markdown-navigation, .ant-select-dropdown'
      }
      onLeave={(origin: Item, destination: Item) => {
        const ref1: (HTMLDivElement & { handleChange: Function }) | null = (
          getRef(origin.index.toString()) as RefObject<
            HTMLDivElement & { handleChange: Function }
          >
        ).current;
        ref1?.handleChange(false);
        const ref2: (HTMLDivElement & { handleChange: Function }) | null = (
          getRef(destination.index.toString()) as RefObject<
            HTMLDivElement & { handleChange: Function }
          >
        ).current;
        ref2?.handleChange(true);
      }}
      render={() => {
        return (
          <div>
            {articles.map(
              (
                article: {
                  title: string;
                  imgUrl: string | undefined;
                  id: number;
                  brief: string;
                  tags: string;
                },
                idx: number,
              ) => {
                return (
                  <Article
                    mykey={idx}
                    id={article.id}
                    title={article.title}
                    imgUrl={article?.imgUrl}
                    brief={article.brief}
                    tags={article.tags}
                    key={article.id}
                    ref={setRef(idx.toString()) as LegacyRef<HTMLDivElement>}
                  />
                );
              },
            )}
          </div>
        );
      }}
    />
  ) : null;
};

export default MainArticles;
