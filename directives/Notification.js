module.exports =  function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'partials/notification.html',
    scope: {
      message: '@',
      display: '@'
    },
    controller: function($scope, $element, $attrs) {
        $scope.hide = function() {
            $scope.message = 'Closing the bar...';
            setTimeout(function() {
                $scope.display = 'none';
                $scope.$apply();
            }, 1000);
        }
    },
    link: function($scope, $element, $attrs) {
        // Adjust the scpope
        setTimeout(function() {
            $scope.message += '... notification bar.';
        }, 1000);

        // Apply the changes
        setTimeout(function() {
            $scope.$apply();
        }, 2000);

        // Watch for changes
        $scope.$watch('message', function() {
        });
    }
  }
};
