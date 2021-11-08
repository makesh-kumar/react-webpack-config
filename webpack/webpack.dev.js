const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devserver: {
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": {
        NODE_ENV: JSON.stringify("makesh-development"),
      },
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
