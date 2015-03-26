var todo = function(){
  console.log("running")
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
};
var script = document.createElement('script');
script.setAttribute('src','//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.6.0/webcomponents.min.js');
script.setAttribute('type','text/javascript');
script.setAttribute('async', 'true');
script.setAttribute('onload', 'todo()');
document.getElementsByTagName('head')[0].appendChild(script);
