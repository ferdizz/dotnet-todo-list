import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../../actions/todoActions';

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expand: false
        }
    }

    handleCheck = (e) => {
        this.props.toggleTodo(this.props.id);
    }

    onDeleteTodo = () => {
        this.props.deleteTodo(this.props.id);
    }

    onExpandTodo = () => {
        this.setState({
            expand: !this.state.expand
        })
    }

    renderExpanded = () => {
        return (
            <div>
                <p>{this.props.description}</p>
                <p className="card-text"><small className="text-muted">{this.props.type}</small></p>
            </div>
        );
    }

    render() {
        return (
            <div className="card todo-card">
                <div className="card-body todo-body">

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id={this.props.id} onChange={this.handleCheck} defaultChecked={this.props.isDone} />
                        <label className="custom-control-label" style={{ textDecoration: this.props.isDone ? 'line-through' : '' }} htmlFor={this.props.id} >{this.props.title}</label>

                        <a href="#" className="card-link todo-link" onClick={this.onDeleteTodo}>Delete</a>
                        <a href="#" className="card-link todo-link" onClick={this.onUpdateTodo}>Edit</a>
                        <a href="#" className="card-link todo-link" onClick={this.onExpandTodo}>{this.state.expand ? 'Close' : 'Expand'}</a>
                    </div>

                    {
                        this.state.expand
                            ? this.renderExpanded()
                            : ''
                    }

                </div>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: (id) => toggleTodo(dispatch, id),
        deleteTodo: (id) => deleteTodo(dispatch, id),
    }
}

export default connect(null, mapDispatchToProps)(Todo);