/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base')({
	mode: 'development',
	// Add hot reloading in development
	entry: [
		'eventsource-polyfill', // Necessary for hot reloading with IE
		path.join(__dirname, 'src/index.js') // Start with js/app.js
	],


	// Don't use hashes in dev mode for better performance
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js'
	},

	// Add development plugins
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
		new HtmlWebpackPlugin({
			inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
			template: path.join(__dirname, 'public/index.html')
		}),
	],

	// Emit a source map for easier debugging
	// See https://webpack.js.org/configuration/devtool/#devtool
	devtool: 'eval-source-map',

	performance: {
		hints: false
	},

	devServer: {
		contentBase: './public',
		hot: true
	}
});
