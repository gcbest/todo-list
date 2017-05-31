import React, {Component} from 'react';
import {connect} from 'react-redux';
var actions = require('../actions/actions');



export class TodoSearch extends Component {
    // handleSearch () {
    //         var showCompleted = this.refs.showCompleted.checked;
    //         var searchText = this.refs.searchText.value;
    //
    //         this.props.onSearch(showCompleted, searchText);
    // }

    render () {
        var {dispatch, showCompleted, searchText} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="text" ref="searchText"
                           placeholder="Search Todos"
                           value={searchText}
                           onChange={() => {
                               var searchText = this.refs.searchText.value;
                               dispatch(actions.setSearchText(searchText));
                           }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted"
                               checkbox={showCompleted}
                               onChange={() => {
                                   dispatch(actions.toggleShowCompleted());
                               }}/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) =>{
        return {
            // this todo will be set on the props of the TodoSearch component
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);