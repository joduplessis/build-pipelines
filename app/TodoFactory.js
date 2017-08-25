module.exports = function($rootScope) {
  return {
    factoryText: '',
    factoryDone: false,
    factoryBroadcast: function(text, done) {
      this.factoryDone = done;
      this.factoryText = text;
      $rootScope.$broadcast('todolist-item-loaded-factory');
    }
  };
};
