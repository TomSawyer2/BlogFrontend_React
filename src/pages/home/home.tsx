import MainArticles from '@/components/MainArticles';
import React from 'react';
import Bubbles from '../../components/Bubble';

const Page: React.FC = () => {
  return (
    <div>
      <Bubbles mainColor={'#66ccff'} />
      <MainArticles />
    </div>
  );
};

export default Page;
