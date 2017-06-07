const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const yaml = require('js-yaml');

// We will want to add support for DEV/Prod builds
// Dev builds should include stack traces and inline source mapping
// Prod builds should include source maps externally

module.exports = {
	/**
	 * Parse the serveless.yml and reduce all functions
	 * down to { functionName: 'path/to/lambda'}
	 */
	entry: (function() {
		const config = yaml.safeLoad(fs.readFileSync('./serverless.yml', 'utf8'));
		return Object.keys(config.functions).reduce((acc, name) => {
		acc[name] = `./${config.functions[name].src.replace(/\.[^\.]*$/, '')}.js`;
		return acc;
		}, {});
	})(),
	target: 'node',
	// Output Common JS modules for each entry
	output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
	},
	// This module comes pre-installed
	externals: ['aws-sdk'],
	resolve: {
		extensions: ['', '.js'],
	},
	devtool: 'source-map',
	plugins: [
    new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
	],
	module: {
    loaders: [
        {
          test: /\.js?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: JSON.parse(
						fs.readFileSync(path.join(__dirname, '.babelrc'), {encoding: 'utf8'})
					),
        },
	],
	},
};
