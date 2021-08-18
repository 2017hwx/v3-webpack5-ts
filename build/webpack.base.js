// webpack.base.js
const path = require('path');
// const webpack = require('webpack');

module.exports = {  // module.exports commonjs规范
  entry: './src/main.js', // 项目入口文件，webpack将从main.js开始，把所有依赖的js都打包
  output: {
    path: path.resolve(__dirname, './dist'), // 项目的打包后的输出路径 可修改
    publicPath: '/dist/', // 通过devServer访问路径 可修改
    filename: 'build.js' // 打包后的文件名 可修改
  }
};

