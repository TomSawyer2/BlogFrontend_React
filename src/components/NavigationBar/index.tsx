import { articlesContext, fullScreenContext } from '@/pages/SubRoute/Layout';
import { Layout, Menu, AutoComplete } from 'antd';
const { Header } = Layout;
import React, { useContext, useEffect, useState } from 'react';
import { history } from 'umi';
import style from './index.css';
import { Input as Search } from 'antd';

interface navibarProps {
  offsetTop: number;
  tab?: number;
}

const SearchBar: React.FC = () => {
  const { articles } = useContext<articlesContextProps>(articlesContext);
  const [titles, setTitles] = useState<string[]>([]);
  const [titlesMap, setTitlesMap] = useState<titlesMap[]>([]);
  const [searchItems, setSearchItems] = useState<titlesMap[]>([]);
  useEffect((): void => {
    if (articles.length > 0) {
      setTitles(articles.map((item: article) => item.title));
      setTitlesMap(
        articles.reduce((prev: titlesMap[], curr: article) => {
          return [...prev, { value: curr.title }];
        }, []),
      );
    }
  }, [articles]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const searchEvent = (e.target as HTMLInputElement).value;
    if (
      titles.some((item: string) => item.includes(searchEvent)) &&
      searchEvent !== ''
    ) {
      const index = titles.findIndex((item: string) =>
        item.includes(searchEvent),
      );
      window?.fullpage_api?.moveTo(encodeURIComponent(titles[index]), 0);
      setTitlesMap(
        articles.reduce((prev: titlesMap[], curr: article) => {
          return [...prev, { value: curr.title }];
        }, []),
      );
    }
    const searchInput = document.getElementById('searchInput');
    searchInput?.blur();
  };

  const handleFilter = (e: string) => {
    setSearchItems(
      titlesMap.filter((item: titlesMap) =>
        item.value.toUpperCase().includes(e.toUpperCase()),
      ),
    );
  };

  useEffect((): void => {
    handleFilter('');
  }, [titlesMap]);

  return (
    <Menu.Item key="search_input" disabled style={{ cursor: 'default' }}>
      <AutoComplete
        options={searchItems}
        style={{ width: 300 }}
        onSearch={handleFilter}
      >
        <Search
          style={{ width: '300px', cursor: 'text' }}
          placeholder="搜索文章"
          size="large"
          allowClear
          onPressEnter={handleSearch}
          id="searchInput"
        />
      </AutoComplete>
    </Menu.Item>
  );
};

type domEvent =
  | (React.KeyboardEvent<HTMLElement> & { _reactName: string })
  | (React.MouseEvent<HTMLElement, MouseEvent> & { _reactName: string });

const NavigationBar: React.FC<navibarProps> = (props) => {
  const { fullscreen } = useContext<fullScreenContextProps>(fullScreenContext);
  const headerStyle = {
    headerOpacity: 0,
  };
  const { offsetTop } = props;
  const height = window.innerHeight;
  if (offsetTop > window.innerHeight * 1.5) {
    headerStyle.headerOpacity = offsetTop / (height * 1.5) - 1;
  }
  const [tab, setTab] = useState<number>(props.tab ?? 1);
  const [changeTab, setChangeTab] = useState<boolean>(false);
  const path = ['', '/', '/index/home', '/index/tags', '/index/my'];
  const handleClick = ({
    key,
    domEvent,
  }: {
    key: string;
    domEvent: domEvent;
  }) => {
    if (domEvent._reactName === 'onClick') {
      if (key !== '2') setChangeTab(true);
      const route = path[Number(key)];
      setTab(Number(key));
      history.push(route);
    }
  };

  useEffect(() => {
    const location = window.location.pathname;
    if (path.indexOf(location) !== -1) setTab(path.indexOf(location));
  }, []);
  return (
    <Header
      className={fullscreen ? style.navibar_hidden : style.navibar}
      style={{
        opacity: headerStyle.headerOpacity,
        backgroundColor: 'white',
      }}
    >
      <Menu
        onClick={({ key, domEvent }) =>
          handleClick({ key, domEvent } as {
            key: string;
            domEvent: domEvent;
          })
        }
        theme="light"
        mode="horizontal"
        selectable={changeTab}
        selectedKeys={[tab.toString()]}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        {tab === 2 ? <SearchBar /> : null}
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
