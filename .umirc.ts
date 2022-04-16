import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index' },
    { path: '/home', component: '@/pages/home/home' },
  ],
  fastRefresh: {},
  // mfsu: {},
  dynamicImport: {},
});
