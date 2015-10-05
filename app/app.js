(function(){
  var app = angular.module('Todo-app', []); //angular module take two arguments, name of the module and array of dependencies.

// initialize list of todos
    app.controller('TodoCtrl', function($scope){
        $scope.todos = [];
        // {done: false, text: 'first'},
        // {done: false, text: 'second'} // dont need this if we store the todos in database
        $scope.todoPriority = 'normal';

      // function to add new todo
        $scope.addTodo = function(){
          var newTodo={
            done: false,
            text: $scope.todoText,
            priority: $scope.todoPriority
          };

            $scope.todos.push(newTodo);
            $scope.todoText = '';
            $scope.todoPriority = 'normal';

        };


      // function to delete item
        $scope.removeTodo = function(start){
          // start is the position where we want to start deleting stuff and 1 is the number of items we want to delete
          $scope.todos.splice(start, 1);
        };


      // function to move item
        $scope.move = function(index, direction){
          // handle moving up
          if (direction === 'up'){
            if (index === 0){
              return;
            }
            index = index -1;
          }
         // handle moving down
          if (direction === 'down'){
            if (index === $scope.todos.length -1) {
            return;
            }
          }
        var todo = $scope.todos[index];
        $scope.todos.splice(index+2, 0, todo);
        $scope.todos.splice(index, 1);
        };
    });


})();

