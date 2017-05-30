import React, {Component} from 'react';
import {connect} from 'react-redux';
var actions = require('../actions/actions');

export class AddTodo extends Component {
    onFormSubmit (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var task = this.refs.task.value;

        if(task.length > 0) {
            this.refs.task.value = '';
            dispatch(actions.addTodo(task));
        } else {
            this.refs.task.focus();
        }
    }
    render() {
        return (
            <div container__footer>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" ref="task" placeholder="Enter Todo Item"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);