import Article from './Article';
import ReactFullpage from '@fullpage/react-fullpage';
import {
  Key,
  LegacyRef,
  RefObject,
  useContext,
  useEffect,
  useState,
} from 'react';
import Request from '@/apis/request';
import useDynamicRefs from 'use-dynamic-refs';
import { fullScreenContext } from '@/pages/home/home';

const request = new Request();
const getArticles = async () => {
  const result: any = await request.postData('/getAllArticle', {});
  return result.data;
};

const MainArticles: React.FC<any> = () => {
  const [articles, setArticles] = useState<any>([]);
  const [render, setRender] = useState<Boolean>(false);
  const { fullscreen } = useContext(fullScreenContext);

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
      anchors={articles.map((item: any) => encodeURIComponent(item.title))}
      onLeave={(origin: any, destination: any) => {
        if (fullscreen) return false;
        const ref1: any = (
          getRef(origin.index.toString()) as RefObject<HTMLDivElement>
        ).current;
        ref1.handleChange(false);
        const ref2: any = (
          getRef(destination.index.toString()) as RefObject<HTMLDivElement>
        ).current;
        ref2.handleChange(true);
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
                  tags: string[];
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