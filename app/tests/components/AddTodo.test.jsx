import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

var AddTodo = require('../../components/AddTodo');
// import AddTodo from '../../components/AddTodo';


describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        // spy is the value the function is being called with
        var todoText = 'open house';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));


        // setting the value of the input
        addTodo.refs.task.value = todoText;
        // pulling the first child element of the form node and using TestUtils Simulate submit method
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when passed invalid data', () => {
        // spy is the value the function is being called with
        var todoText = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));


        // setting the value of the input
        addTodo.refs.task.value = todoText;
        // pulling the first child element of the form node and using TestUtils Simulate submit method
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
