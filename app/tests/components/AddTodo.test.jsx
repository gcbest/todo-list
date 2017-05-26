import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import AddTodo from '../../components/AddTodo';


describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call newTodo prop when passed valid data', () => {
        // spy is the value the function is being called with
        var todoText = 'open house';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo newTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));


        // setting the value of the input
        addTodo.refs.task.value = todoText;
        // pulling the first child element of the form node and using TestUtils Simulate submit method
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call newTodo prop when passed invalid data', () => {
        // spy is the value the function is being called with
        var todoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo newTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));


        // setting the value of the input
        addTodo.refs.task.value = todoText;
        // pulling the first child element of the form node and using TestUtils Simulate submit method
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
