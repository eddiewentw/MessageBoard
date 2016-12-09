const ip = require('ip');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const PORT = '8080';

new WebpackDevServer(webpack(config), {
	contentBase: config.output.path,
	publicPath: config.output.publicPath,
	hot: true,
	noInfo: true,
}).listen(PORT, 'localhost', (err, result) => {
	if (err) {
		return console.log(result);
	}

	console.log(`Server started at http://localhost:${PORT}`);
	console.log(`Tunnel started at http://${ip.address()}:${PORT}\n`);
	return result;
});
