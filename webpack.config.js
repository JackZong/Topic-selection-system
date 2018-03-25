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
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.less$/, loader: 'less-loader' }
      ]
	},
	devServer: {
		inline: true,
		port: 8008
	},
	plugins:[HTMLWebpackPluginConfig],
	mode: 'development',
	resolve: {
		alias: {
			components: `${__dirname}/src/components`,
			models: `${__dirname}/src/models`,
			routes: `${__dirname}/src/routes`,
		}
	}
}