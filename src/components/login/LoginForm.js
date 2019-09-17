import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/actionUser'

//semantic components
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Container
} from 'semantic-ui-react';

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

        this.props.loginUser(params)

        this.setState({
            username: '',
            password: ''
        })
    }

    handleUserFetchStatus = (isAuthenticated, isFetching, message) => {
        if(!isAuthenticated && !isFetching) {
            return(
                <>
                    <Button type="submit">Submit</Button>
                    <p>{ message }</p>
                </>
            )
        } else if (!isAuthenticated && isFetching) {
            return(
                <Button loading></Button>
            )
        } else if (isAuthenticated && !isFetching) {
            this.props.history.push('/')
        }
    }

    render() {
        return(
            <Container>
                <Grid padded centered columns={2}>
                    <Grid.Column>
                        <Header as="h2" textAlign="center">
                            Login
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
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    onChange={event => this.handleOnChange(event)}
                                    name="password"
                                    value={this.state.password}
                                />
                                {this.handleUserFetchStatus(this.props.isAuthenticated, this.props.isFetching, this.props.message)}
                            </Form>
                        </Segment>
                        <Message>
                            Not registered yet? <a href="/registration">Register</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default connect(null, { loginUser })(LoginForm)