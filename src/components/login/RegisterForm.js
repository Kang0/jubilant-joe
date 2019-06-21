import React, { Component } from 'react';
import {
    Button, Form, Grid, Header, Segment, Container
} from 'semantic-ui-react'


class RegisterForm extends Component {

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

        this.props.registerUser(params)

        

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
            <Container>
                <Grid centered padded columns={2}>
                    <Grid.Column>
                        <Header as="h2" textAlign="center">
                            User Registration
                        </Header>
                        <Segment>
                            <Form size="large" onSubmit={event => this.handleOnSubmit(event)}>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Username"
                                    onChange={event => this.handleOnChange(event)}
                                    name="username"
                                />
                                <Form.Input
                                    fluid
                                    icon="mail outline"
                                    iconPosition="left"
                                    placeholder="Email"
                                    onChange={event => this.handleOnChange(event)}
                                    name="email"
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    onChange={event => this.handleOnChange(event)}
                                    name="password"
                                />
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default RegisterForm