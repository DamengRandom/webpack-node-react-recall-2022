const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  title: "Development",
});

module.exports = {
  entry: ["webpack-hot-middleware/client", "./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  mode: "development",
};
