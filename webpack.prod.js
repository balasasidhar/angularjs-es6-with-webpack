const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[name].[hash].css"
    })
  ]
});
