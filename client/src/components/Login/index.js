import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, createUser } from '../../actions/userActions'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLogin: true,
            email: '',
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleKeypress = (e) => {
        if (e.key && e.key === 'Enter') {

            // temp way to distinguish between the two
            if (this.state.name) {
                this.submitCreate()
            } else {
                this.submitLogin()
            }

        }
    }

    submitLogin = () => {
        this.props.login({
            "email": this.state.email
        })
    }

    submitCreate = () => {
        this.props.createUser({
            "email": this.state.email,
            "name": this.state.name,
        })
    }

    changeForm = () => {
        this.setState({ showLogin: !this.state.showLogin });
    }

    render() {

        const loginForm = (
            <div>
                <h5 className="card-title">Login</h5>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                </div>
                <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={this.submitLogin} >Submit</button>
                <button className="btn btn-primary" onClick={this.changeForm} >Create user</button>
                <p className="text-danger" style={{ marginBottom: '0', marginTop: '10px' }} >{this.props.status}</p>
            </div>
        )

        const createUserForm = (
            <div>
                <h5 className="card-title">Create user</h5>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={this.handleChange} onKeyPress={this.handleKeypress} />
                </div>
                <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={this.submitCreate} >Submit</button>
                <button className="btn btn-primary" onClick={this.changeForm} >Cancel</button>
                <p className="text-danger" style={{ marginBottom: '0', marginTop: '10px' }} >{this.props.status}</p>
            </div>
        )

        return (
            <div className="card">
                <div className="card-body">
                    {this.state.showLogin ? loginForm : createUserForm}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.user.status
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userdata) => login(dispatch, userdata),
        createUser: (userdata) => createUser(dispatch, userdata)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);