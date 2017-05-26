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
});