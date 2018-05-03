// Important modules this config uses
const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base')({
	mode: 'production',
	// In production, we skip all hot-reloading stuff
	entry: [
		path.join(__dirname, 'src/index.js')
	],

	// Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
	output: {
		filename: 'bundle.js'
	},

	plugins: [
	],

	performance: {
		assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
	},
});
