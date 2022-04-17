import { Layout, Menu } from 'antd';
const { Header } = Layout;
import React, { useState } from 'react';
import { history } from 'umi';
import style from './index.css';

interface navibarProps {
  offsetTop: number;
  tab?: number;
}

const NavigationBar: React.FC<navibarProps> = (props) => {
  const headerStyle = {
    headerOpacity: 0,
  };
  const { offsetTop } = props;
  const height = window.innerHeight;
  if (offsetTop > window.innerHeight * 1.5) {
    headerStyle.headerOpacity = offsetTop / (height * 1.5) - 1;
  }
  const tab = props.tab ?? 1;
  const path = ['', '/', '/home'];
  const handleClick = (e: any) => {
    const route = path[e.key];
    history.push(route);
  };
  return (
    <Header
      className={style.navibar}
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
