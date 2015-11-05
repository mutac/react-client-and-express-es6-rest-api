var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var client = {
  srcPath: path.join(__dirname, 'client'),
  publicPath: path.join(__dirname, 'public'),
  entryJs: 'index.js',
  entryHtml: 'index.html'
};

var server = {
  hostname: 'localhost',
  port: 5050,
  srcPath: path.join(__dirname, 'server'),
  entryJs: 'index.js',
  contentBase: client.publicPath,
  publicPath: client.publicPath,
  hot: true,
  historyApiFallback: true
};

module.exports = {
  clientConfig: client,
  serverConfig: server,
  
  target: 'web',
  cached: true,
  debug: true,
  devtool: 'eval-cheap-module-source-path',

  entry: [
    'webpack-dev-server/client?http://' + server.hostname + ':' + server.port,
    'webpack/hot/only-dev-server',
    path.join(client.srcPath, client.entryJs)
  ],

  resolve: {
    root: client.srcPath,
    extensions: [ '', '.js' ],
    modulesDirectory: [ 'node_modules', 'client' ]
  },

  output: {
    path: client.publicPath,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,

        /* Babel is configured by the .babelrc, which is used in two different
           contexts.  1) when the client is built, 2) when the server is transpiled
           at startup by bable-core/register.  The cacheDirectory=true here, only
           applies to the client build context.
        */
        loaders: [ 'react-hot', 'babel?cacheDirectory=true' ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js', Infinity),
    new HtmlWebpackPlugin({
      template: path.join(client.srcPath, client.entryHtml)
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
