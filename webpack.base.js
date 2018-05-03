const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.join(__dirname, 'dist');

module.exports = (options) => ({
	mode: options.mode,
	entry: options.entry,
	output: Object.assign({ // Compile into js/build.js
		path: dist,
		publicPath: '/',
	}, options.output), // Merge with env dependent settings
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, // Transform all .js files required somewhere with Babel
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: options.babelQuery,
				},
			},
			{
				// Preprocess our own .scss files
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				// Preprocess 3rd party .css files located in node_modules
				test: /\.css$/,
				include: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							query: {
								gifsicle: {
									interlaced: true
								},
								mozjpeg: {
									progressive: true
								},
								optipng: {
									optimizationLevel: 7
								},
								pngquant: {
									quality: '65-90',
									speed: 4
								}
							}
						},
					},
				],
			}
		],
	},
	plugins: options.plugins.concat([
		new CleanWebpackPlugin([dist], {}),

		new webpack.ProvidePlugin({
			// make fetch available
			fetch: 'exports-loader?self.fetch!whatwg-fetch'
		}),

		// Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
		// inside your code for any environment checks; UglifyJS will automatically
		// drop any unreachable code.
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			},
		})
	]),
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: [
			'.js',
			'.jsx',
			'.scss',
			'.react.js'
		],
	},
	devtool: options.devtool,
	target: 'web', // Make web variables accessible to webpack, e.g. window
	performance: options.performance || {},
	optimization: {
		namedModules: true,
	}
});
