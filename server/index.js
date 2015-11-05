import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import express from 'express';
import config from '../webpack.config'

var devServer = new WebpackDevServer(webpack(config), config.serverConfig); 

devServer.listen(config.serverConfig.port, config.serverConfig.hostname, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on ' + config.serverConfig.port);
  }
});

