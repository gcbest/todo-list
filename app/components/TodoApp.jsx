import React, {Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class TodoApp extends Component {
    constructor () {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'walk dog'
                },
                {
                    id: 2,
                    text: 'clean yard'
                }
            ]
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    handleAddTodo (text) {
        alert('new todo: ' + text);
    }
    render () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo newTodo={this.handleAddTodo}/>
            </div>
        );
    }
}

export default TodoApp;