import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../../actions/todoActions';

class Todo extends Component {

    handleCheck = (e) => {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        return (
            <div className="card todo-card">
                <div className="card-body todo-body">

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id={this.props.id} onChange={this.handleCheck} defaultChecked={this.props.isDone} />
                        <label className="custom-control-label" style={{ textDecoration: this.props.isDone ? 'line-through' : '' }} htmlFor={this.props.id} >{this.props.title}</label>

                        <a href="#" className="card-link todo-link" onClick={this.onDeleteUser}>Delete</a>
                        <a href="#" className="card-link todo-link" onClick={this.onUpdateUser}>Edit</a>
                        <a href="#" className="card-link todo-link" onClick={this.onExpandUser}>Expand</a>
                    </div>
                </div>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: (id) => toggleTodo(dispatch, id)
    }
}

export default connect(null, mapDispatchToProps)(Todo);