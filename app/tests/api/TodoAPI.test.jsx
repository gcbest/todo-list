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

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'testing dog',
            completed: true
        },
        {
            id: 2,
            text: 'testing cat',
            completed: false
        },
        {
            id: 3,
            text: 'testing leprechaun',
            completed: true
        }];

        it('should return all items if show completed is true', () => {
           var filteredTodos = TodoAPI.filterTodos(todos, true, '');
           expect(filteredTodos.length).toBe(3);
        });

        it('should return only the items that have not been completed', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
           var filteredTodos = TodoAPI.filterTodos(todos, true, '');
           expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by search text', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'dog');
            expect(filteredTodos.length).toBe(1);
        });

        it('should return all items if search text is an empty string', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});

