const path = require( "path" );

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		pagebuilder: "./js/src/pagebuilder.js",
	},
	output: {
		path: path.resolve( "js", "dist" ),
		filename: "[name].js",
	},
	externals: {
		"@wordpress/data": "wp.data",
		"@wordpress/element": "wp.element",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					"babel-loader",
				]
			}
		]
	}
};
