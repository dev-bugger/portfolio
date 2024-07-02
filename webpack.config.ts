import CompressionWebpackPlugin from "compression-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import TerserWebpackPlugin from "terser-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

module.exports = {
  entry: "./src/index.tsx", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "build"), // Output directory,
    publicPath: "/portfolio/",
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
        use: ["style-loader", "css-loader"],
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
            drop_console: true, // Drop console.* statements
          },
          output: {
            comments: false, // Remove comments from output
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip", // or 'brotliCompress'
      test: /\.(jsx?|tsx?|css|html|svg)$/,
      threshold: 10240, // files larger than 10kB will be compressed
      minRatio: 0.8, // only compress files that compress better than this ratio
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
