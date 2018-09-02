//====================================================|
// WEBPACK PROD PLUGINS: MINI CSS EXTRACT


//--------------------------| Import

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


//--------------------------| Configuration

const plugin = new MiniCssExtractPlugin({
  filename: "app.[chunkhash].css"
});


//--------------------------| Export

module.exports = plugin;
