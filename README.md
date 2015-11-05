React & ES6 Express Rest API Boilerplate
========================================

A little example project of a React client app that is written in es6 and jsx, and
a backend express server, also written in es6.  Webpack is used to bundle and transpile the client app, and to transpile and serve an es6 express server app.  The example also shows how to set up the client app and server with Webpack so that modifications to the client are hot-reload live by the dev server. 

Getting Started
===============
```sh
$ git clone https://github.com/mutac/react-client-and-express-es6-rest-api.git
```

## Make it your own
```
$ cd react-client-and-express-es6-rest-api
$ rm -rf .git && git init && npm init
```

## Install and build
```sh
$ npm install
...
$ npm run build
```

## Try it out
```sh
$ npm start
$ open http://localhost:5050
```

References
----------

- ES6 support via [babel 6](https://babeljs.io)
- Client App build via [webpack](https://webpack.github.io)

keywords...
babel 6
react-hot-reloader
hot replace reload
es6
express
