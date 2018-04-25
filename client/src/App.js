import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import UserList from './components/UserList';
import './styles.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div>
          {
            this.props.user.email
              ? ''
              : <Login />
          }
        </div>
        <UserList />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App);
