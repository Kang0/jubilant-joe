import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserPage from '../components/user/UserPage'
import UserLocker from '../components/user/UserLocker'
import { getUser, getLogout } from '../actions/actionUser'

import { Segment, Button, Icon, Grid } from 'semantic-ui-react'

class UserContainer extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    handleLogOut = () => {
        this.props.getLogout()
        this.props.history.push("/login")
    }

    render() {
        return (
            <>
                <Segment compact>
                    <Grid padded>
                        <UserPage user={ this.props.user } />
                        <Grid.Row>
                            <UserLocker locker={ this.props.locker }/>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Button color='red' onClick={this.handleLogOut}><Icon name="sign-out"></Icon>Sign Out</Button>
            </>
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