const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      /* ts */
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      /* less */
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
   // 配置Webpack插件
   plugins: [
     new HTMLWebpackPlugin({
       template: "./src/index.html"
     })
   ],
   mode: 'development'
}
