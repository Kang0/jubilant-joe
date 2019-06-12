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

        console.log(JSON.stringify(params))

        let url = "http://localhost:3001/login"

        fetch(url, {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem("token", data.token)
            } else {
                this.setState({error: 'Invalid username or password'})
            }
        })
        .catch(error => console.log("Error " + error))
    }

    render() {
        return(
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input type="text" name="username" value={this.state.username} onChange={event => this.handleOnChange(event)} />
                    <input type="password" name="password" value={this.state.password} onChange={event => this.handleOnChange(event)} />
                    <input type="submit" value="Login" />
                </form>
                <span>{this.state.error}</span>
            </div>
        )
    }

}

export default LoginForm