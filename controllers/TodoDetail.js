module.exports = function($scope, $rootScope, $location, $http, $routeParams, TodoService, TodoFactory) {
  $scope.title = "Detail";
  $scope.text = $routeParams.todoText;
  $scope.done = $routeParams.todoDone;

  // Send a broadcast from a factory
  TodoFactory.factoryBroadcast($scope.text, $scope.done);

  // This redundant, but we call our factory
  // Calls our TodoService service
  $rootScope.$on('todolist-item-loaded-factory', function() {
    $scope.text = TodoFactory.factoryText;
    $scope.done = TodoFactory.factoryDone;
    TodoService.todoServiceBroadcast($scope.text, $scope.done);
  });

  // And here we listen for the services broadcast
  $rootScope.$on('todolist-item-loaded-service', function(event, args) {
    // console.log('Broadcast from Factory -> Controller -> Service -> Controller.');
    // console.log(args);
  });

};
