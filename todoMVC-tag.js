
window.addEventListener('WebComponentsReady', function() {
  var Todo = Object.create(HTMLElement.prototype);
  
  Todo.createdCallback = function() {
    this.innerHTML = "<iframe width='400' height='600' frameBorder='0' src='http://todomvc.com/examples/react/#/'/>";
  };

  Todo.foo = function() {
    console.log('foo() called');
  };

  var XFoo = document.registerElement('todo-mvc', {
    prototype: Todo
  });
});
