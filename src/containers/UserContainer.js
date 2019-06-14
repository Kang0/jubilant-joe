import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginForm from '../components/login/LoginForm'
import UserPage from '../components/user/UserPage'

import { loginUser, setUserState } from '../actions/actionUser'

class UserContainer extends Component {

    render() {
        return (
            <div>
                <LoginForm loginUser={this.props.loginUser} />
                <UserPage setUserState={this.props.setUserState} />
            </div>
        )
    }

}

export default connect(null, { loginUser, setUserState })(UserContainer)