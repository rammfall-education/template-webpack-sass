import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (_, { mode }) => {
  const isDevelopmentMode = mode === 'development';

  return {
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].[fullhash].js',
      clean: true,
      publicPath: '/',
    },
    devServer: {
      hot: true,
      port: 3000,
      static: {
        directory: join(__dirname),
      },
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /.s[ac]ss$/i,
          use: [
            isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/static/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash].css',
      }),
    ],
  };
};
