const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.join(__dirname, 'dist');
const srcDir = path.join(__dirname, 'src');
const nodeModules = path.resolve(path.join(__dirname, 'node_modules'));

const environment = process.env.NODE_ENV || 'development';

module.exports = {
	output: {
		filename: '[name].js',
		path: dist,
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, // Transform all .js files required somewhere with Babel
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				// Preprocess our own .scss files
				test: /\.scss$/,
				include: [
					path.join(nodeModules, 'bootstrap'),
					path.join(srcDir, 'styles')
				],
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

	plugins: [
		new CleanWebpackPlugin([dist], {}),
		new webpack.ProvidePlugin({
			// make fetch available
			fetch: 'exports-loader?self.fetch!whatwg-fetch',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(environment)
			},
		})
	],

	resolve: {
		modules: ['src', 'node_modules'],
		extensions: [
			'.js',
			'.jsx',
			'.scss',
			'.react.js'
		],

		alias: {
			components: `${path.join(__dirname, 'src')}/components/`,
			config: `${path.join(__dirname, 'src')}/config/`,
			common: `${path.join(__dirname, 'src')}/common/`,
			assets: `${path.join(__dirname, 'src')}/assets/`,
			views: `${path.join(__dirname, 'src')}/views/`,
			router: `${path.join(__dirname, 'src')}/router/`,
			modules: `${path.join(__dirname, 'src')}/modules/`,
			store: `${path.join(__dirname, 'src')}/store/`,
			sagas: `${path.join(__dirname, 'src')}/sagas/`,
			services: `${path.join(__dirname, 'src')}/services/`,
		}
	},

	target: 'web', // Make web variables accessible to webpack, e.g. window

	performance: {},

	optimization: {
		namedModules: true,
	}
};
