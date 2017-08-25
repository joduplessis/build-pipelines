module.exports = function($compile) {
  return {
    restrict: 'A',
    scope: {
      heading: '@',
      paragraph: '@'
    },
    replace: true,
    controller: function($scope, $element) {
      $scope.heading = 'To do list example';
      $scope.paragraph = 'Simple example illustrating a to do list app using various build tools.';
    },
    link: function(scope, elem, attrs) {      
      var attributes = attrs.header.split(' '); // Splits the value of the directive attribute on the tag
      var el = angular.element('<div class="container header"><h1>{{' + attributes[0] + '}}</h1><h2>{{' + attributes[1] + '}}</h2></div>'); // Creates an HTML element for the directive
      var compiled = $compile(el); // Creates a new linking function (template function) for the HTML element
      elem.append(el); // Apends the element to the element
      compiled(scope); // Runs the compiled function, pass in the scope object
    }
  }
};
