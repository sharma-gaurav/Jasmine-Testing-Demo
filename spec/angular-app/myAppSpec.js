describe('TodoController',function(){
    var scope, controller, TodoService;
    beforeEach(function() {
        module("myApp");

        module(function ($provide) {
            // provide your mocking here
        });

        inject(function($controller, $rootScope, _TodoService_) {
            scope = $rootScope.$new();
            TodoService = _TodoService_;
            controller = $controller('TodoController', {$scope: scope});
        });
    });

    it("Validate controller is defined :", function () {
        expect(controller).toBeDefined();
        expect(scope.tasks.length).toBe(4)
    });

    it("Validate toggleDone is working properly :", function () {
        expect(scope.toggleDone).toBeDefined();
        spyOn(TodoService,'toggleTaskDone').and.callThrough();

        scope.toggleDone(1);

        expect(TodoService.toggleTaskDone).toHaveBeenCalledWith(1);
        expect(scope.tasks[1].isDone).toBeTruthy();
    })

});


describe('TodoService',function(){
    var  TodoService;
    beforeEach(function() {
        module("myApp");

        module(function ($provide) {
            // provide your mocking here
        });

        inject(function(_TodoService_) {
            TodoService = _TodoService_;
        });
    });

    it("should be defined :", function () {
        expect(TodoService).toBeDefined();
        expect(TodoService.tasks).toBeDefined()
    });

    it("should be able to create and add a new task:", function () {
        TodoService.createTask({});

        //Write your test here
    });

});




