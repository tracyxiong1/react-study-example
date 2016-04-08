module.exports = {
	entry: './app/app.js',
	output: {
		publicPath: '/build',
		path: '/build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/, 
				exclude:/node_modules/, 
				loader: 'babel', 
				query: {presets: ['es2015', 'react', 'stage-0']}
			},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
		]
	}
};