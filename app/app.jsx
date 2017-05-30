var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from './components/TodoApp';

var actions = require('./actions/actions');
var store = require('./store/configureStore').configure();

store.subscribe(() => {
   console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
