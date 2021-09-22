import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'mini-design',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  sass: {
    // 传递给 Dart Sass 或 Node Sass 的配置项，可以是一个 Function
    sassOptions: {},
  },
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
    },
  },
  locales: [['zh-CN', '中文']],
  publicPath: '/mini-design/',
  base: '/mini-design/',
});
