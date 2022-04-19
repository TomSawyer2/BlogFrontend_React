import {
  articlesContext,
  fullpageContext,
  fullScreenContext,
} from '@/pages/home/home';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
import React, { useContext, useEffect, useState } from 'react';
import { history } from 'umi';
import style from './index.css';
import { Input as Search } from 'antd';

interface navibarProps {
  offsetTop: number;
  tab?: number;
}

const NavigationBar: React.FC<navibarProps> = (props) => {
  const { fullpageApi, setFullpageApi } = useContext<any>(fullpageContext);
  const { fullscreen } = useContext<any>(fullScreenContext);
  const headerStyle = {
    headerOpacity: 0,
  };
  const { offsetTop } = props;
  const height = window.innerHeight;
  if (offsetTop > window.innerHeight * 1.5) {
    headerStyle.headerOpacity = offsetTop / (height * 1.5) - 1;
  }
  const tab = props.tab ?? 1;
  const path = ['', '/', '/home', '/tags'];
  const handleClick = (e: any) => {
    const route = path[e.key];
    history.push(route);
  };

  const { articles } = useContext<any>(articlesContext);
  const [titles, setTitles] = useState<any[]>([]);
  useEffect((): void => {
    if (articles.length > 0) {
      setTitles(
        // articles.reduce((prev: any, curr: any) => {
        //   return [...prev, { value: curr.title }];
        // }, []),
        articles.map((item: any) => item.title),
      );
    }
  }, [articles]);

  const handleSearch = (e: any) => {
    const searchEvent = e.target.value;
    if (titles.indexOf(searchEvent) !== -1) {
      fullpageApi?.moveTo(encodeURIComponent(searchEvent));
    }
  };

  return (
    <Header
      className={fullscreen ? style.navibar_hidden : style.navibar}
      style={{
        opacity: headerStyle.headerOpacity,
        backgroundColor: 'white',
      }}
    >
      <Menu
        onClick={handleClick}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[tab.toString()]}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Menu.Item disabled style={{ cursor: 'default' }}>
          <Search
            style={{ width: '300px', cursor: 'text' }}
            placeholder="搜索文章"
            allowClear
            onPressEnter={handleSearch}
          />
        </Menu.Item>
        <Menu.Item key="1" style={{ padding: '0 30px' }}>
          首页
        </Menu.Item>
        <Menu.Item key="2" style={{ padding: '0 30px' }}>
          全部文章
        </Menu.Item>
        <Menu.Item key="3" style={{ padding: '0 30px' }}>
          标签
        </Menu.Item>
        <Menu.Item key="4" style={{ padding: '0 30px' }}>
          个人中心
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavigationBar;
