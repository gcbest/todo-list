import React, {Component} from 'react';

class AddTodo extends Component {
    onFormSubmit (e) {
        e.preventDefault();

        var task = this.refs.task.value;

        if(task.length > 0) {
            this.refs.task.value = '';
            this.props.newTodo(task);
        } else {
            this.refs.task.focus();
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" ref="task" placeholder="Enter Todo Item"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>

        );
    }
}

export default AddTodo;