import React, {Component} from 'react';

class TodoSearch extends Component {
    handleSearch () {
            var showCompleted = this.refs.showCompleted.checked;
            var searchText = this.refs.searchText.value;

            this.props.onSearch(showCompleted, searchText);
    }
    render () {
        return (
            <div>
                <div>
                    <input type="text" ref="searchText"
                           placeholder="Search Todos"
                           onChange={this.handleSearch}/>
                </div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" ref="showCompleted"
                                onChange={this.handleSearch}/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        );
    }
}

export default TodoSearch;