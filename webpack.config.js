var path = require("path")
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: false,
      hash: true,
      template: path.resolve(__dirname, "src/template.ejs")
    })
  ]
}