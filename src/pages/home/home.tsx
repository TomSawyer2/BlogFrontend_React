import MainArticles from '@/components/MainArticles';
import NavigationBar from '@/components/NavigationBar';
import React, { useState } from 'react';
export const fullScreenContext = React.createContext({});
export const articlesContext = React.createContext({});
export const fullpageContext = React.createContext({});
const Page: React.FC<any> = () => {
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const [articles, setArticles] = useState<any>([]);
  const [fullpageApi, setFullpageApi] = useState<any>([]);
  return (
    <fullScreenContext.Provider value={{ fullscreen, setFullscreen }}>
      <articlesContext.Provider value={{ articles, setArticles }}>
        <fullpageContext.Provider value={{ fullpageApi, setFullpageApi }}>
          <NavigationBar offsetTop={1000000} tab={2} />
          <MainArticles />
        </fullpageContext.Provider>
      </articlesContext.Provider>
    </fullScreenContext.Provider>
  );
};

export default Page;
