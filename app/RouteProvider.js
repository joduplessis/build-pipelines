module.exports = function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'templates/list.html', controller: 'TodoList'}).
    when('/detail/:todoText/:todoDone', {templateUrl: 'templates/detail.html',controller: 'TodoDetail'}).
    otherwise({ redirectTo: '/' });
};
