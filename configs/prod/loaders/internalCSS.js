//====================================================|
// WEBPACK PROD LOADERS: INTERNAL CSS


//--------------------------| Import

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


//--------------------------| Export

module.exports = {
  test: /\.s?css$/,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader', // translates CSS into CommonJS
      options: {
        modules: true,
        sourceMap: true,
        camelCase: 'dashes',
        localIdentName: '[hash:base64:5]'
      }
    },
    {
      loader: 'sass-loader', // compiles Sass to CSS
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          './node_modules/compass-mixins/lib/_compass.scss',
          './client/src/styles/resources/base.scss',
          './client/src/styles/resources/functions/**/*.scss',
          './client/src/styles/resources/data/registries/core/**/*.scss',
          './client/src/styles/resources/data/registries/items/**/*.scss',
          './client/src/styles/resources/data/roles/**/*.scss',
          './client/src/styles/resources/mixins/**/*.scss',
          './client/src/styles/resources/placeholders/**/*.scss'
        ]
      },
    }
  ]
};
