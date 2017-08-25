module.exports =  function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
        $element.css({'display': 'none'});
    }
  }
};
