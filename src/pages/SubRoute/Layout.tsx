import NavigationBar from '@/components/NavigationBar';
import { IRouteComponentProps } from 'umi';
import { createContext, useState } from 'react';

export const fullScreenContext = createContext({} as fullScreenContextProps);
export const articlesContext = createContext({} as articlesContextProps);

export default (props: IRouteComponentProps) => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [articles, setArticles] = useState<article[]>([]);

  return (
    <div>
      <fullScreenContext.Provider value={{ fullscreen, setFullscreen }}>
        <articlesContext.Provider value={{ articles, setArticles }}>
          <NavigationBar offsetTop={1000000} tab={2} />
          {props.children}
          <a
            href="https://icp.gov.moe/?keyword=20220830"
            target="_blank"
            style={{ position: 'fixed', bottom: '0', left: '50%' }}
          >
            萌ICP备20220830号
          </a>
        </articlesContext.Provider>
      </fullScreenContext.Provider>
    </div>
  );
};
