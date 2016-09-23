angular.module("myApp", [])
    .controller("TodoController", function ($scope, TodoService) {
        console.log("laksjdfkjsdfsdjlf");
        $scope.tasks = TodoService.tasks;

        $scope.loggedInUser = "Gaurav";

        $scope.createTask = function(taskName) {
            var today = new Date();
            today.setHours(0,0,0,0);
            TodoService.createTask({task: taskName,
                dateCreated: today,
                createdBy: $scope.loggedInUser})
        };

        $scope.toggleDone = function(index) {
            TodoService.toggleTaskDone(index);
        };

        $scope.createTask("Clean your teeth");
        $scope.createTask("Fresh ho jao!");
        $scope.createTask("Take a bath");
        $scope.createTask("Wear clothes");

        $scope.toggleDone(2);

    })
    .service("TodoService", function(Todo) {
        var _this = this;
        _this.tasks = [];

        _this.createTask = function (json) {
            _this.tasks.push(new Todo(json));
        };

        _this.deleteTask = function (index) {
            if(_this.tasks.length > index) {
                _this.tasks.splice(index, 1);
            } else {
                throw new Error("Index Out Of Bound")
            }
        };

        _this.toggleTaskDone = function (index) {
            if(_this.tasks.length > index) {
                this.tasks[index].isDone = !this.tasks[index].isDone;
            } else {
                throw new Error("Index Out Of Bound")
            }
        };

        _this.getAllTask = function () {
            return _this.tasks;
        };

        _this.getTaskByDate = function (date) {
            var allTask = _this.getAllTask();
            return allTask.filter(function(task) {
                return task.dateCreated == date;
            });
        };

        _this.getTaskByAuthor = function (authorName) {
            var allTask = _this.getAllTask();
            return allTask.filter(function(task) {
                return task.createdBy == authorName;
            });
        };

        _this.getTodaysTask = function () {
            var today = new Date();
            today.setHours(0,0,0,0);
            getTaskByDate(today);
        }
    })
    .factory("Todo", function() {
        return function (json) {
            this.task = json.task;
            this.isDone = json.isDone ? json.isDone : false;
            this.createdBy = json.createdBy;
            this.dateCreated = json.dateCreated;
        };
    });