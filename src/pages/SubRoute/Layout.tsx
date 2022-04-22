import NavigationBar from '@/components/NavigationBar';
import { createContext, useState } from 'react';

export const fullScreenContext = createContext({});
export const articlesContext = createContext({});

export default (props: any) => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [articles, setArticles] = useState<any>([]);

  return (
    <div>
      <fullScreenContext.Provider value={{ fullscreen, setFullscreen }}>
        <articlesContext.Provider value={{ articles, setArticles }}>
          <NavigationBar offsetTop={1000000} tab={2} />
          {props.children}
        </articlesContext.Provider>
      </fullScreenContext.Provider>
    </div>
  );
};
