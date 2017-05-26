import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import TodoList from '../../components/TodoList';
import Todo from '../../components/Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render on Todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'walk dog'
            },
            {
                id: 2,
                text: 'clean yard'
            }
        ]
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });
});