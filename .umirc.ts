import { defineConfig } from 'umi';
const { InjectManifest } = require('workbox-webpack-plugin');

export default defineConfig({
  hash: true,
  webpack5: {},
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
    {
      path: '/ui',
      component: '@/pages/ui/ui',
    },
  ],
  title: '博客 - TomSawyer2',
  favicon: './favicon.ico',
  fastRefresh: {},
  // mfsu: {},
  dynamicImport: {
    loading: '@/components/PageLoading/PageLoading',
  },
  sass: {},
  copy: ['/pwa/manifest.webmanifest'],
  links: [{ rel: 'manifest', href: '/manifest.webmanifest' }],
  chainWebpack(memo) {
    memo.plugin('workbox').use(InjectManifest, [
      {
        swSrc: './pwa/service-worker.ts',
        swDest: 'service-worker.js',
        exclude: [/\.map$/, /favicon\.ico$/, /^manifest.*\.js?$/],
      },
    ]);
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed',
  },
});
