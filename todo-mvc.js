window.addEventListener("load", function(){
  document.body.innerHTML = document.body.innerHTML.replace(/\s*(<todo-mvc.*(\\>|>(.|\s)*<\/todo-mvc>))/, '<iframe src="http://todomvc.com/examples/react/#/" frameborder="0" width="400" height="600"></iframe>');
});