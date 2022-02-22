const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', 'scss'],
    alias: {
      src: path.resolve(process.cwd(), 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.p?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
};
