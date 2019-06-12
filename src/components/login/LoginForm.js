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

    render() {
        return(
            <div>
                <form>
                    <input type="text" name="username" value={this.state.username} onChange={event => this.handleOnChange(event)} />
                    <input type="password" name="password" value={this.state.password} onChange={event => this.handleOnChange(event)} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }

}

export default LoginForm