import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import {TodoSearch} from '../../components/TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        // allows us to pass in a function to our component and check that it gets called
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        var testSearchText = 'dog';
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };

        todoSearch.refs.searchText.value = testSearchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        // expect onSearch to be called with its initial value for the checkbox and 'dog' for searchText
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});