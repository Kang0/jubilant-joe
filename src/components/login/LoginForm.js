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
    }

    render() {
        return(
            <Container>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Header as="h2" textAlign="center">
                            Login
                        </Header>
                        <Segment>
                            <Form size="large">
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Username"
                                    onChange={this.handleOnChange}
                                    name="username"
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    onChange={this.handleOnChange}
                                    name="password"
                                />
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
            
        )
    }

}

export default connect(null, { loginUser })(LoginForm)