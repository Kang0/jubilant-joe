import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserPage from '../components/user/UserPage'
import UserLocker from '../components/user/UserLocker'
import { getLocker } from '../actions/actionLocker'
import { getUser, getLogout } from '../actions/actionUser'

import { Container, Button, Icon } from 'semantic-ui-react'

class UserContainer extends Component {

    componentDidMount() {
        this.props.getUser()
        // this.props.getLocker()
    }

    handleLogOut = () => {
        this.props.getLogout()
    }

    render() {
        return (
            <Container>
                <UserLocker locker={ this.props.locker }/>
                <UserPage user={ this.props.user } />
                <Button fluid color='red' onClick={this.handleLogOut}><Icon name="sign-out"></Icon>Sign Out</Button>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user,
        locker: state.locker
    }
}

export default connect(mapStateToProps, { getUser, getLogout })(UserContainer)