const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// 抽离css样式---将文件单独打包
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: 'index.html',
	inject: 'body'
})
const webpack = require('webpack')
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
      rules: [
        { test: /(\.js|\.jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /(\.less|\.css)$/, use: ExtractTextPlugin.extract({ use: [{loader: 'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]'}, {loader: 'less-loader',options:{javascriptEnabled: true}}], fallback: 'style-loader'})},
        { test: /\.scss$/, use: [{ loader: 'style-loader'}, { loader: 'css-loader' }, { loader: 'sass-loader' }]},
        { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }
      ]
	},
	devServer: {
		inline: true,
		port: 8008,
		historyApiFallback: true,
		contentBase: './src',
		hot: true
	},
	plugins:[
	  HTMLWebpackPluginConfig,
	  new ExtractTextPlugin( "bundle.css" ),
	  new webpack.HotModuleReplacementPlugin(),
	  new webpack.DefinePlugin({
      //  'API': JSON.stringify('http://47.106.149.89:3000/api')
        'API': JSON.stringify('http://127.0.0.1:3000/api')
	  })],
	mode: 'development',
	resolve: {
		alias: {
			components: `${__dirname}/src/components`,
			models: `${__dirname}/src/models`,
			routes: `${__dirname}/src/routes`,
			variables: __dirname + '/src/variables',
			views: __dirname + '/src/views',
			PUBLIC: __dirname + '/public'
		}
	}
}