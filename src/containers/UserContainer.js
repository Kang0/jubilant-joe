import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserPage from '../components/user/UserPage'
import UserLocker from '../components/user/UserLocker'
import { getUserChallenges } from '../actions/actionChallenge'

class UserContainer extends Component {

    render() {
        return (
            <div>
                <UserLocker props={ this.props.locker }/>
                <UserPage getUserChallenges={ this.props.getUserChallenges } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        locker: state.locker
    }
}

export default connect(mapStateToProps, { getUserChallenges })(UserContainer)