import React, {Component} from 'react';
import uuid from 'node-uuid';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from '../api/TodoAPI';


class TodoApp extends Component {
    constructor () {
        super();
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidUpdate () {
        TodoAPI.setTodos(this.state.todos);
    }
    handleAddTodo (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text,
                    completed: false
                }
            ]
        })
    }
    handleToggle (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({todos: updatedTodos});
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
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo newTodo={this.handleAddTodo}/>
            </div>
        );
    }
}

export default TodoApp;