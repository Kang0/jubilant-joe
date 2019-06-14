import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserPage from '../components/user/UserPage'

import { loginUser } from '../actions/actionUser'

class UserContainer extends Component {

    render() {
        return (
            <div>
                <UserPage />
            </div>
        )
    }

}

export default connect(null, { loginUser})(UserContainer)