import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment, Container } from 'semantic-ui-react'


class RegisterForm extends Component {

    state ={
        username: '',
        email: '',
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
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
        }

        this.props.registerUser(params)

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
                                    value={this.state.username}
                                />
                                <Form.Input
                                    fluid
                                    icon="mail outline"
                                    iconPosition="left"
                                    placeholder="Email"
                                    onChange={event => this.handleOnChange(event)}
                                    name="email"
                                    value={this.state.email}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    onChange={event => this.handleOnChange(event)}
                                    name="password"
                                    value={this.state.password}
                                />
                                <Button type="submit">Submit</Button>
                            </Form>
                            <p>{this.props.message}</p>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default RegisterForm