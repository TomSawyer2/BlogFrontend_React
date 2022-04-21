import MainArticles from '@/components/MainArticles';
import NavigationBar from '@/components/NavigationBar';
import React, { useMemo, useState } from 'react';
export const fullScreenContext = React.createContext({});
export const articlesContext = React.createContext({});
const Page: React.FC<any> = () => {
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const [articles, setArticles] = useState<any>([]);

  const articlesContextMemo = useMemo(
    () => ({
      articles,
      setArticles,
    }),
    [articles],
  );
  return (
    <fullScreenContext.Provider value={{ fullscreen, setFullscreen }}>
      <articlesContext.Provider value={articlesContextMemo}>
        <NavigationBar offsetTop={1000000} tab={2} showSearch={true} />
        <MainArticles />
      </articlesContext.Provider>
    </fullScreenContext.Provider>
  );
};

export default Page;
