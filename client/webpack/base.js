var path = require('path');

module.exports = {
	context: __dirname,
	entry: [
		'babel-polyfill',
		'../app/startup.jsx'
	],
	output: {
		path: path.resolve('./static/build/'),
		filename: '[name]-[hash].js'
	},
	plugins: [],
	module: {
		rules: [{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: "url-loader"
		},
		{
			test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
			use: 'file-loader'
		}]
	}
};