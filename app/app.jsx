var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from './components/TodoApp';

var actions = require('./actions/actions');
var store = require('./store/configureStore').configure();

store.subscribe(() => {
   console.log('New state', store.getState());
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
       <TodoApp/>
    </Provider>,
  document.getElementById('app')
);
