import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index', title: '首页 - TomSawyer2' },
    {
      path: '/index',
      component: '@/pages/SubRoute/Layout',
      routes: [
        {
          path: '/index/home',
          component: '@/pages/home/home',
          title: '全部文章 - TomSawyer2',
        },
        {
          path: '/index/tags',
          component: '@/pages/tags/tags',
          title: '标签 - TomSawyer2',
        },
        {
          path: '/index/my',
          component: '@/pages/personal/personal',
          title: '个人中心 - TomSawyer2',
        },
      ],
    },
  ],
  title: '博客 - TomSawyer2',
  favicon: './favicon.ico',
  fastRefresh: {},
  mfsu: {},
  dynamicImport: {},
});
