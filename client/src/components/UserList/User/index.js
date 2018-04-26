import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../../TodoList/Todo';
import { deleteUser, updateUser, expandUser } from '../../../actions/adminActions';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expand: false
        };
    }

    onExpandUser = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    onUpdateUser = () => {
        // TODO
        console.log('Not implemented')
    }

    onDeleteUser = () => {
        const { id } = this.props;
        this.props.deleteUser(id);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title-left">{this.props.name}</h5>
                    <p>Email: {this.props.email}</p>
                    <div>
                        <a href="#" className="card-link" onClick={this.onExpandUser}>{this.state.expand ? 'Hide todos' : 'Show todos'}</a>
                        <a href="#" className="card-link" onClick={this.onUpdateUser}>Update</a>
                        <a href="#" className="card-link" onClick={this.onDeleteUser}>Delete</a>
                    </div>
                    {this.state.expand && this.props.todos && this.props.todos.map(todo => (
                        <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} type={todo.type} isDone={todo.isDone} />
                    ))}
                </div>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return {
        // expandUser: (id) => expandUser(dispatch, id),
        updateUser: (user) => updateUser(dispatch, user),
        deleteUser: (id) => deleteUser(dispatch, id),
    }
}

export default connect(null, mapDispatchToProps)(User);