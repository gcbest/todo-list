var $ = require('jquery');

module.exports = {
    setTodos: (todos) => {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }

    },
    getTodos: () => {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: (todos, showCompleted, searchText) => {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            // only return items that arent completed yet,
            // or if show completed is checked return everything
            return !todo.completed || showCompleted;
        });

        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();

           return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // sort todos with non-completed first
        filteredTodos.sort((a,b) => {
            // if 'a' isn't completed and 'b' is, put 'a' first
           if (!a.completed && b.completed) {
               return -1;
           }
           // if 'a' isn't completed and 'b' is, put 'a' second
           else if (a.completed && !b.completed) {
               return 1;
           } else {
               return 0;
           }
        });
        return filteredTodos;
    }
};