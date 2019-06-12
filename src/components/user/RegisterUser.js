import React, { Component } from 'react'

class NewUserPage extends Component {

    state ={
        username: '',
        email: '',
        password: '',
        register: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()

        let params = {
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
        }

        fetch('http://localhost:3001/registration', {
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
            if(data.status) {
                console.log(data)
                this.setState({
                    register: data.status
                })
            } else {
                console.log("Unable to create user")
                this.setState({
                    register: "Unable to register at this time"
                })
            }
        })
        .catch(error => console.log("There was an error" + error))

        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    Username: <input type="text" name="username" value={this.state.username} onChange={event => this.handleOnChange(event)} />
                    Email: <input type="text" name="email" value={this.state.email} onChange={event => this.handleOnChange(event)} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={event => this.handleOnChange(event)} />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default NewUserPage