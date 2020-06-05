const path = require('path');

const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist');

const buildConfig = {
  entries : {
    'gridjs-jquery': APP_DIR + '/index.js',
  },
  excludeDependencies : {
    'jquery': 'jQuery',
    'gridjs': 'gridjs'
  }
};

module.exports = [{
  mode: 'production',
  devtool: 'source-map',
  entry: buildConfig.entries,
  optimization: {
    minimize: true
  },
  output: {
    filename: '[name]-min.js',
    path: BUILD_DIR,
  },
  externals: buildConfig.excludeDependencies
}, {
  mode: 'development',
  entry: buildConfig.entries,
  optimization: {
    minimize: false
  },
  output: {
    filename: '[name].js',
    path: BUILD_DIR,
  },
  externals: buildConfig.excludeDependencies
}];