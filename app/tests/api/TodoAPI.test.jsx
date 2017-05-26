import expect from 'expect';

const TodoAPI = require('../../api/TodoAPI');

describe('TodoAPI', () => {
    // mocha lifecycle method that will run before each test
    beforeEach(() => {
       localStorage.removeItem('todos');
    });


    it('should exist', () => {
       expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
           var todos = [{
               id: 22,
               text: 'testing',
               completed: false
           }];
           TodoAPI.setTodos(todos);

           var actualTodos = JSON.parse(localStorage.getItem('todos'));

           // need to use "toEqual" to make sure all
            // the values in an array or object match up
           expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
           var badTodos = {a: 'b'};

            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });



    describe('getTodos', () => {
        it('should return empty array for bad local storage data', () => {
           var actualTodos = TodoAPI.getTodos();
           expect(actualTodos).toEqual([]);
        });

        it('should return todo if valid array in localStorage', () => {
            var todos = [{
                id: 22,
                text: 'testing',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });
});

