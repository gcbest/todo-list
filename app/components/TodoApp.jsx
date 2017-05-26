import React, {Component} from 'react';
import TodoList from './TodoList';

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
        }
    }
    render () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
}

export default TodoApp;