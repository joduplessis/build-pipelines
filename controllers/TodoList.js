module.exports = function($scope, $rootScope, $location, $http, TodoService, TodoFactory) {
  $scope.title = "To Do List";
  $scope.items = [
    {text: "This is the first item", done: false},
    {text: "This is the second item", done: false},
  ];

  $scope.addTodoText = function() {
    $scope.items.push({text: $scope.inputTodoText, done:false});
    $scope.inputTodoText = "";
  };

  $scope.getTotalTodos = function() {
    return $scope.items.length;
  };
};
