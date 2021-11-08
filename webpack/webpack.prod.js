const webpack = require("webpack");
module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": {
        NODE_ENV: JSON.stringify("makesh-production"),
      },
    }),
  ],
};
