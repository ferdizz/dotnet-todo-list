import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import UserList from './components/UserList';
import TodoList from './components/TodoList';
import User from './components/User';
import { setUser } from './actions/userActions';
// import { getData } from './misc/storage';
import './misc/styles.css';

class App extends Component {

  // componentDidMount() {
  //   // let userData = getData('user');
  //   if (userData) {
  //     this.props.setUser(userData);
  //   }
  // }

  getUI() {
    let email = this.props.user.email

    if (!email)
      return <Login />

    if (email === 'admin@admin.com')
      return (
        <div>
          <User />
          <UserList />
        </div>
      )

    return (
      <div>
        <User />
        <TodoList />
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        {this.getUI()}
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
    setUser: (userdata) => setUser(dispatch, userdata)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
