# Build pipelines

Source code for a talk I gave on JS build pipelines in early 2016. 

## Install

Connect & ServeStatic is used for a very lightweight web server, so no need to move the example to an existing server.

- Download
- Npm install
- Bower install
- node server (listens on localhost:9090)

## Build
Build using the following:

  - webpack
  - gulp build
  - grunt build
  - grunt gulp

### You can also watch for changes
- webpack --watch
- gulp watch
- grunt watch

### Don't forget to comment out the require('./styles.css') if you're building with Grunt or Gulp
