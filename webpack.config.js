const path = require( "path" );

console.log( process.env.NODE_ )

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		pagebuilder: "./js/src/pagebuilder.js",
	},
	output: {
		path: path.resolve( "js", "dist" ),
		filename: "[name].js",
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
