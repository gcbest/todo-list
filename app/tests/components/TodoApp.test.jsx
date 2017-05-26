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
       todoApp.handleAddTodo(toodText);

       expect(todoApp.state.todos[0].text).toBe(todoText);
       
    });
});