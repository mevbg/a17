//====================================================|
// WEBPACK CONFIG: PROD


//--------------------------| Import

const glob = require('glob');
const path = require('path');
const loaders = glob.sync(`${__dirname}/loaders/**/*.js`).map(file => require( path.resolve( file ) ));
const plugins = glob.sync(`${__dirname}/plugins/**/*.js`).map(file => require( path.resolve( file ) ));


//--------------------------| Configuration

const config = {
  mode: 'production',
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, '../../client/dist'),
    filename: 'app.[chunkhash].js'
  },
  module: {
    rules: loaders
  },
  plugins
};


//--------------------------| Export

module.exports = config;
