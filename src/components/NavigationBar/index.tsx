import { Layout, Menu } from 'antd';
const { Header } = Layout;
import React, { useState } from 'react';
import style from './index.css';

interface navibarProps {
  offsetTop: number;
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

  return (
    <Header
      className={style.navibar}
      style={{
        opacity: headerStyle.headerOpacity,
        backgroundColor: 'white'
      }}
    >
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Menu.Item key="1" style={{padding: '0 30px'}}>首页</Menu.Item>
        <Menu.Item key="2" style={{padding: '0 30px'}}>全部文章</Menu.Item>
        <Menu.Item key="3" style={{padding: '0 30px'}}>标签</Menu.Item>
        <Menu.Item key="4" style={{padding: '0 30px'}}>个人中心</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavigationBar;
