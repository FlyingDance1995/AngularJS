angular.module('app', []).
    controller('MyController', function ($scope) {
       
        $scope.todos = [
            // {'title': 'abc', 'done':false},
        ];

        $scope.addItem = function () {
            $scope.todos.push({ 'title': $scope.newTodo, 'done': false });
            $scope.hidden = {
                "opacity": "1"
            }
            $scope.newTodo = '';
            Count();
        }

        $scope.removeItem = function () {
            $scope.todos.splice(this.$index, 1);
            if ($scope.todos.length == 0) {
                $scope.hidden = {
                    "opacity": "0"
                }
            }
            Count();
        }

        $scope.change = function (model) {
            if (model) {
                for (let index = 0; index < $scope.todos.length; index++) {
                    $scope.todos[index].done = true;
                }
            } else {
                for (let index = 0; index < $scope.todos.length; index++) {
                    $scope.todos[index].done = false;
                }
            }
            Count();
        }
        $scope.change1 = function (model1, $index) {
            if (model1) {
                $scope.todos[$index].done = true;
                
            } else {
                $scope.todos[$index].done = false;
                
            }
            Count();
        }

        $scope.all = function () {
            $scope.myFilter = {}
            Count();
        }
        $scope.active = function () {
            $scope.myFilter = {done:false}
            Count();
        }
        $scope.completed = function () {
            $scope.myFilter = {done:true}
            Count();
        }

        $scope.clearCompleted = function () {
            $scope.todos = $scope.todos.filter(function (item) {
                return !item.done;
            });
            if ($scope.todos.length == 0) {
                $scope.hidden = {
                    "opacity": "0"
                }
            }
            Count();
        }

        function Count() {
            var count = 0;
            var styclear = 0;
            for (let index = 0; index < $scope.todos.length; index++) {
                if ($scope.todos[index].done == false) {
                    count++;
                }
                else {
                    styclear++;
                }
            }
            if (styclear > 0) {
                $scope.styleClearCompleted = {
                    "opacity": "1"
                }
            }
            else {
                $scope.styleClearCompleted = {
                    "opacity": "0"
                }
            }

            $scope.countItem = count;

            if ($scope.todos.length > 0) {
                $scope.bottomHidden = {
                    "opacity": "1"
                }
            } else {
                $scope.bottomHidden = {
                    "opacity": "0"
                }
            }
        }
    });
