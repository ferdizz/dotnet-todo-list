import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

import { getUsers } from '../../actions/adminActions';

class UserList extends Component {

    componentWillMount() {
        this.props.getUsers();
    }

    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Users</h5>
                    {this.props.users && this.props.users.map(user => (
                        <User key={user.id} id={user.id} email={user.email} name={user.name} />
                    ))}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        users: state.admin.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => getUsers(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
