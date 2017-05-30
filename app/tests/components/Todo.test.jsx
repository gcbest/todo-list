import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import {Todo} from '../../components/Todo';

describe('Todo', () => {
    it('should exist', () => {
        var todo = TestUtils.renderIntoDocument(<Todo/>);
       expect(todo).toExist();
    });

    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {
            id: 99,
            text: 'testing onToggle',
            completed: true
        };

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith({
            type: "TOGGLE_TODO",
            id: todoData.id
        });
    });
});