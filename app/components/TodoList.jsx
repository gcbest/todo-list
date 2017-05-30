import React, {Component} from 'react';
var {connect} = require('react-redux');
import Todo from './Todo';

export class TodoList extends Component {
    render () {
        var {todos} = this.props;
        var renderTodos = () => {
          if(todos.length === 0) {
              return (
                <p className="container__message">Nothing To Do</p>
              );
          }
        };
        var renderTodos = () => {
            return todos.map((todo) => {
               return (
                   <Todo key={todo.id} {...todo}/>
               );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // this todo will be set on the props of the TodoList component
            todos: state.todos
        };
    }
)(TodoList);