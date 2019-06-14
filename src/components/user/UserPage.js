import React, { Component } from 'react';
import { connect } from 'react-redux';

const baseUrl = 'http://localhost:3001'

class UserPage extends Component {

    componentDidMount() {
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