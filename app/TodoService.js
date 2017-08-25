module.exports = function($rootScope) {
  this.text = '';
  this.done = false;
  this.todoServiceBroadcast = function(text, done) {
    this.text = text;
    this.done = done;
    $rootScope.$broadcast('todolist-item-loaded-service', {text:this.text,done:this.done});
  };
};
