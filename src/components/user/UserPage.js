import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserChallenges from '../challenges/userChallenges'

class UserPage extends Component {

    componentDidMount() {
        this.props.getUserChallenges()
    }

    render() {
        return (
            <div>
                {this.props.user ? (
                    <div>
                        <h1>{this.props.user.username}</h1>
                        <p>{this.props.user.email}</p>
                    </div>
                ) : (
                    <p>Please Login</p>
                )}
                {/* <UserChallenges /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users[0]
    }
}

export default connect(mapStateToProps)(UserPage)