import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
var $ = require('jQuery');
import TestUtils from 'react-addons-test-utils';

import Todo from '../../components/Todo';

describe('Todo', () => {
    it('should exist', () => {
        var todo = TestUtils.renderIntoDocument(<Todo/>);
       expect(todo).toExist();
    });
});