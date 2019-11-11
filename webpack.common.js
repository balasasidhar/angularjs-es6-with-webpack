const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "app.js"),
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"]
      },
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: ["file-loader"]
      },
      {
        test: /\.bundle\.js$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
          name: "[name]"
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "AngularJS 1.x with Webpack 4",
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};
