import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import TodoApp from '../../components/TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        expect(todoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
       var todoText = 'test text';

       var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

       todoApp.setState({todos: []});
       todoApp.handleAddTodo(todoText);

       expect(todoApp.state.todos[0].text).toBe(todoText);
       expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handle toggle called', () => {
       var todoData = [{
           id: 11,
           text: 'test features',
           completed: false,
           createdAt: 32,
           completedAt: undefined
       }];

       var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
       todoApp.setState({todos: todoData});

       expect(todoApp.state.todos[0].completed).toBe(false);

       todoApp.handleToggle(11);
       expect(todoApp.state.todos[0].completed).toBe(true);
       expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle completed value to incomplete when handle toggle called', () => {
        var todoData = [{
            id: 11,
            text: 'test features',
            completed: true,
            createdAt: 32,
            completedAt: undefined
        }];

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: todoData});

        expect(todoApp.state.todos[0].completed).toBe(true);

        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.completedAt).toNotExist();
    });
});