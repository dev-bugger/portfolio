import CompressionWebpackPlugin from "compression-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import dotenv from "dotenv";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import TerserWebpackPlugin from "terser-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { DefinePlugin } from "webpack";

const envVar = dotenv.config({
  path: "./.env",
});

module.exports = (env) => ({
  mode: env.production ? "production" : "development",
  entry: "./src/index.tsx", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "build"), // Output directory,
    publicPath: "/portfolio/",
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpe?g|gif|pdf)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              exportType: "named",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(envVar.parsed),
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip", // or 'brotliCompress'
      test: /\.(jsx?|tsx?|css|html|svg)$/,
      threshold: 10240, // files larger than 10kB will be compressed
      minRatio: 0.8, // only compress files that compress better than this ratio
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [{ from: "./public/404.html", to: "./404.html" }],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  devServer: {
    compress: true,
    port: process.env.DEV_PORT,
    historyApiFallback: true,
    static: path.join(__dirname, "build"),
  },
});
