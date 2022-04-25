import MainArticles from '@/components/MainArticles';
import React from 'react';
import Bubbles from '../../components/Bubble';

const Page: React.FC<any> = () => {
  return (
    <>
      <Bubbles mainColor={'#66ccff'} />
      <MainArticles />
    </>
  );
};

export default Page;
