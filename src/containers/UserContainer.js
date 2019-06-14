import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserPage from '../components/user/UserPage'

import { getUserChallenges } from '../actions/actionChallenge'

class UserContainer extends Component {

    render() {
        return (
            <div>
                <UserPage getUserChallenges={ this.props.getUserChallenges } />
            </div>
        )
    }

}

export default connect(null, { getUserChallenges })(UserContainer)