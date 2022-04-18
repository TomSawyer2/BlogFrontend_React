import MainArticles from '@/components/MainArticles';
import NavigationBar from '@/components/NavigationBar';
import React from 'react';
export const fullScreenContext = React.createContext({});
const Page: React.FC<any> = () => {
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);

  return (
    <fullScreenContext.Provider value={{ fullscreen, setFullscreen }}>
      <NavigationBar offsetTop={1000000} tab={2} />
      <MainArticles />
    </fullScreenContext.Provider>
  );
};

export default Page;
