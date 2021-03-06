var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from './components/TodoApp';
import TodoAPI from './api/TodoAPI';

var actions = require('./actions/actions');
var store = require('./store/configureStore').configure();

store.subscribe(() => {
    var state = store.getState();

    console.log('New state', state);

    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));


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
