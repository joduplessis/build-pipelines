// Includes from NPM
var angular = require('angular');
var AngularRoute = require('angular-route');

// Includes from OUR files
var TodoDetail = require('./controllers/TodoDetail');
var TodoList = require('./controllers/TodoList');
var Notification = require('./directives/Notification');
var Header = require('./directives/Header');
var Hide = require('./directives/Hide');
var Service = require('./app/TodoService');
var Factory = require('./app/TodoFactory');
var RouteProvider = require('./app/RouteProvider');

// Only used for Webpack, uncomment for Gulp & Grunt
// require('./styles.css');

 // Set up the app
var appModule = angular.module('app', [AngularRoute]);

// Set up a directive
appModule.directive('notification', Notification);
appModule.directive('hide', Hide);
appModule.directive('header', ['$compile', Header]);

// Routes
appModule.config(['$routeProvider', RouteProvider]);

// Controllers
appModule.controller('TodoList', ['$scope', '$rootScope', '$location', '$http', 'TodoService', 'TodoFactory', TodoList]);
appModule.controller('TodoDetail', ['$scope', '$rootScope', '$location', '$http', '$routeParams', 'TodoService', 'TodoFactory',  TodoDetail]);

// Service (contructor function, serves as ES6 class)
appModule.service('TodoService', Service);

// Factory (object literal, serves as an ES5 object)
appModule.factory('TodoFactory', Factory);
