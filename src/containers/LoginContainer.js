import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginForm from '../components/login/LoginForm'
import UserPage from '../components/user/UserPage'

import { loginUser } from '../actions/actionUser'

class LoginContainer extends Component {

    render() {
        return (
            <div>
                <LoginForm loginUser={this.props.loginUser} />
                <UserPage />
            </div>
        )
    }

}

export default connect(null, loginUser)(LoginContainer)