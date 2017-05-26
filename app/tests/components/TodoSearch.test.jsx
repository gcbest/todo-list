import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import TodoSearch from '../../components/TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        // allows us to pass in a function to our component and check that it gets called
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        var testSearchText = 'dog';
        todoSearch.refs.searchText.value = testSearchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        // expect onSearch to be called with its initial value for the checkbox and 'dog' for searchText
        expect(spy).toHaveBeenCalledWith(false, 'dog');
    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});