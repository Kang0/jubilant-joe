import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserPage from '../components/user/UserPage'
import UserLocker from '../components/user/UserLocker'
import { getUser, getLogout } from '../actions/actionUser'

import { Button, Icon, Grid } from 'semantic-ui-react'

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
                <Grid padded divided>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <UserPage user={ this.props.user } />
                        </Grid.Column>
                        <Grid.Column>
                            <UserLocker locker={ this.props.locker } />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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