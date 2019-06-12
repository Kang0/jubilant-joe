import React, { Component } from 'react';

class LoginForm extends Component {
    
    state = {
        username: '',
        password: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()

        let params = {
            username: this.state.username,
            password: this.state.password
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input type="text" name="username" value={this.state.username} onChange={event => this.handleOnChange(event)} />
                    <input type="password" name="password" value={this.state.password} onChange={event => this.handleOnChange(event)} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }

}

export default LoginForm