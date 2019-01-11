var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: path.resolve(__dirname, 'src/template.ejs')
    }),
    new CopyWebpackPlugin([{
      from: './public/**/*',
      to: './[name].[ext]',
      toType: 'template'
    }])
  ]
}