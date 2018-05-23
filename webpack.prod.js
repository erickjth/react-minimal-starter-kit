const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
	entry: [
		'babel-polyfill',
		path.join(__dirname, 'src/index.js') // Start with js/app.js
	],

	mode: 'production',

	devtool: 'source-map',

	performance: {
		assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
	},
});
