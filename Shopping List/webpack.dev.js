const { merge } = require("webpack-merge");
const { resolve } = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  target: "web",
  devServer: {
    port: 1234,
    hot: true,
    compress: true,
    static: {
      directory: resolve(__dirname, "dist"),
    },
    watchFiles: ["public/*.html"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
