import React, {Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
    constructor () {
        super();
        this.state = {
            showCompleted: false,
            searchText: '',
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
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleAddTodo (text) {
        alert('new todo: ' + text);
    }
    handleSearch (showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        })
    }
    render () {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo newTodo={this.handleAddTodo}/>
            </div>
        );
    }
}

export default TodoApp;