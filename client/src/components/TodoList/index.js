import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

import { addTodo } from '../../actions/todoActions';

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            filter: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleKeypress = (e) => {
        if (e.key && e.key === 'Enter') {
            let title = this.state.title
            if (title.trim()) {
                this.props.addTodo(title, this.props.userId)
            }
        }
    }

    filterAll = () => {
        this.setState({
            filter: ''
        })
    }

    filterHome = () => {
        this.setState({
            filter: 'home'
        })
    }

    filterWork = () => {
        this.setState({
            filter: 'work'
        })
    }

    filterUncategorized = () => {
        this.setState({
            filter: 'uncategorized'
        })
    }

    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Todos</h5>

                    <input type="text" className="form-control" placeholder="Add a new todo" name="title" onChange={this.handleChange} onKeyPress={this.handleKeypress} />

                    <div className="todo-filter">
                        <span>Filter: </span>
                        <a href="#" className="card-link" style={{ textDecoration: this.state.filter ? '' : 'underline' }} onClick={this.filterAll}>All</a>
                        <a href="#" className="card-link" style={{ textDecoration: this.state.filter === 'home' ? 'underline' : '' }} onClick={this.filterHome}>Home</a>
                        <a href="#" className="card-link" style={{ textDecoration: this.state.filter === 'work' ? 'underline' : '' }} onClick={this.filterWork}>Work</a>
                        <a href="#" className="card-link" style={{ textDecoration: this.state.filter === 'uncategorized' ? 'underline' : '' }} onClick={this.filterUncategorized}>Uncategorized</a>
                    </div>

                    {this.props.todos && this.props.todos.map(todo => {
                        let filter = this.state.filter
                        if (!filter || todo.type.toLowerCase() === filter) {
                            return (
                                <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} type={todo.type} />
                            )
                        }
                    })}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        todos: state.user.todos,
        userId: state.user.id,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (title, userId) => addTodo(dispatch, title, userId),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);