import React, { Component } from 'react';

import LoginForm from '../components/login/LoginForm'
import UserPage from '../components/user/UserPage'

class LoginContainer extends Component {

    render() {
        return (
            <div>
                <LoginForm />
                <UserPage />
            </div>
        )
    }

}

export default LoginContainer