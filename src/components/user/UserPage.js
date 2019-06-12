import React, { Component } from 'react'

const baseUrl = 'http://localhost:3001'

class UserPage extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        if(token) {
            fetch(baseUrl + '/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.user ? (
                    <div>
                        <h1>{this.state.user.name}</h1>
                        <p>{this.state.user.email}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        )
    }
}

export default UserPage