//====================================================|
// WEBPACK COMMON LOADERS: ICONS


//--------------------------| Export

module.exports = {
  test: /\.svg/,
  use: [
    {
      loader: 'svg-url-loader'
    }
  ]
};
