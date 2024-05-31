// webpack.dev.js
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

// 合并公共配置，并添加开发环境配置
module.exports = merge(baseConfig, {
  mode: 'development', // 开发模式，不会压缩最终代码
  devServer: {
    port: 3000, // 服务端口号
    // 解决路由跳转404问题
    historyApiFallback: true,
    hot: true,
    static: {
      //托管静态资源文件
      directory: path.join(__dirname, '../public'),
    },
  },
  devtool: 'eval-cheap-module-source-map',
})
