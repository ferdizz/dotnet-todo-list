import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/userActions';

class User extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title-left">{this.props.user.name}</h5>
                    <p>Email: {this.props.user.email}</p>
                    <div>
                        <a href="/" className="card-link" >Edit profile</a>
                        <a href="/" className="card-link" onClick={this.props.logout}>Logout</a>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => logout(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);