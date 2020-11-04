const path = require("path");
// const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require('vue-loader');
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

const babelConfig = {
  cacheDirectory: true,
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            "last 2 versions",
            "Firefox ESR",
            "> 1%",
            "ie >= 11",
            "iOS >= 8",
            "Android >= 4",
          ],
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "iview-ts-vue3",
        libraryDirectory: "", // default: lib
        style: true,
      },
    ],
    ["@vue/babel-plugin-jsx", { mergeProps: false }],
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-class-properties",
  ],
};
module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    main: "./examples/main",
  },
  output: {
    path: path.join(__dirname, "../examples/dist"),
    publicPath: "",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
      {
        test: /\.tsx|ts?$/,
        use: [
          {
            loader: "babel-loader",
            options: babelConfig,
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /pickr.*js/,
        options: babelConfig,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, "../examples/dist/index.html"),
      template: path.join(__dirname, "../examples/index.html"),
    }),
    new FriendlyErrorsPlugin(),
    new VueLoaderPlugin(),
  ],
});
