const defaultConfig = require('./webpack.config');

module.exports = {
  ...defaultConfig,
  // mode: 'production',
  output: {
    libraryTarget: 'commonjs',
    filename: 'index.js',
  },
};
