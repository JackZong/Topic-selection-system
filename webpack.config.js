const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: 'index.html',
	inject: 'body'
})
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
      loders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {
        	presets: ['es2015', 'react']
        } }
      ]
	},
	devServer: {
		inline: true,
		port: 8008
	},
	plugins:[HTMLWebpackPluginConfig]
}