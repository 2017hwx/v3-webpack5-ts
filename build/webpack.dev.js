const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');
const config = require('../config');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = 'development';

module.exports = merge(common, {
  mode,
  cache: {
    type: 'filesystem',
  },
  // rules
  devServer: {
    open: true, //自动打开浏览器
    contentBase: './', // 本地服务器在哪个目录搭建页面，一般我们在当前目录即可；
    inline: true, // 用来支持dev-server自动刷新的配置，webpack有两种模式支持自动刷新，一种是iframe模式，一种是inline模式；使用iframe模式是不需要在devServer进行配置的，只需使用特定的URL格式访问即可；不过我们一般还是常用inline模式，在devServer中对inline设置为true后，当我们启动webpack-dev-server时仍要需要配置inline才能生效
    hot: true, // 启用热更新, 第一步
    host: config.dev.host,
    port: config.dev.port,
    proxy: config.dev.proxyTable,
  },

  rules: [
    // {
    //   test: /\.(t|j)s$/,
    //   exclude: /node_modules/,
    //   use: [
    //     {
    //       loader: 'ts-loader',
    //       options: {
    //         // 指定特定的ts编译配置，为了区分脚本的ts配置
    //         configFile: path.resolve(__dirname, '../tsconfig.loader.json'),
    //         // 对应文件添加个.ts或.tsx后缀
    //         appendTsSuffixTo: [/\.vue$/],
    //         transpileOnly: true, // ? 关闭类型检查，即只进行转译
    //       },
    //     },
    //   ],
    // },
  ],
  // plugins push
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    //new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'), // 我们要使用的 html 模板地址
      filename: 'index.html', // 打包后输出的文件名
      title: '手搭 Vue 开发环境', // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    }),
  ],
});
