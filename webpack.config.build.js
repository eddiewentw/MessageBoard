const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const base = require('./webpack.config');

module.exports = {
	entry: base.entry,
	output: base.output,
	module: {
		loaders: base.module.loaders.concat(
			Object.assign(base.module.cssLoader, {
				loader: ExtractTextPlugin.extract(
					base.module.cssLoader.loader.style,
					base.module.cssLoader.loader.css
				)
			})
		),
	},
	plugins: [
		base.plugins.htmlWebpakcPlugin,
		new HtmlWebpackInlineSourcePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
		}),
		new ExtractTextPlugin('[name].[chunkhash:5].css'),
	],
	postcss: base.postcss,
	devtool: 'source-map',
}
