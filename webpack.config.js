const path = require('path')

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'build/scripts'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		publicPath: '/scripts/'
	},
	devtool: 'source-map'
}
