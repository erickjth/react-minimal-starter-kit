const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',

	entry: [
		path.join(__dirname, 'src/index.js') // Start with js/app.js
	],

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	devtool: 'inline-source-map',

	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(__dirname, 'src/index.html'),
			filename: 'index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],

	performance: {
		hints: false
	},

	devServer: {
		host: 'localhost',
		port: '3000',
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		historyApiFallback: true,
		contentBase: path.join(__dirname, "dist"),
		noInfo: false,
		inline: true
	}
});
