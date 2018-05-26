const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Jogo da Velha",
      inject: false,
      hash: true,
      template: path.resolve(__dirname, "src/template.ejs")
    })
  ]
}