import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserPage from '../components/user/UserPage'
import UserLocker from '../components/user/UserLocker'
import { getLocker } from '../actions/actionLocker'
import { getUser } from '../actions/actionUser'

class UserContainer extends Component {

    componentDidMount() {
        this.props.getUser()
        this.props.getLocker()
    }

    render() {
        return (
            <div>
                <UserLocker locker={ this.props.locker }/>
                <UserPage user={ this.props.user } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user,
        locker: state.locker
    }
}

export default connect(mapStateToProps, { getLocker, getUser })(UserContainer)