import MainArticles from '@/components/MainArticles';
import React from 'react';
import Bubbles from '../../components/Bubble';

const Page: React.FC<any> = () => {
  return (
    <div style={{ height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      <Bubbles mainColor={'#66ccff'} />
      <MainArticles />
    </div>
  );
};

export default Page;
