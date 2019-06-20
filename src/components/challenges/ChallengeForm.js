import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import { postChallenge } from '../../actions/actionChallenge'
import { Grid, Button, Form, Message } from 'semantic-ui-react'

class ChallengeForm extends Component {

    state = {
        name: '',
        dayCreated: '',
        daysLeft: 100,
        lastDay: '',
        clicked: false,
        timeClicked: '',
        timeToClick: ''
    }

    componentDidMount() {
        this.getDate()
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.postChallenge(this.state)
        this.setState({
            name: ''
        })
    }

    getDate = () => {
        const dayCreated = moment(new Date()).format('MM-DD-YYYY')
        const lastDay = moment(dayCreated, "MM-DD-YYYY").add(100, 'days').format('MM-DD-YYYY')
        
        const timeToClick = moment(new Date()).format("MMM D YY, h:mm a")

        this.setState({
            dayCreated: dayCreated,
            lastDay: lastDay,
            timeToClick: timeToClick
        })
    }

    render () {
        return (
            <Grid fluid padded>
                <Grid.Row centered>
                    <React.Fragment>
                        <Form fluid onSubmit={event=>this.handleOnSubmit(event)}>
                            <Form.Input label="100 Day Challenge" value={this.state.name} onChange={event=>this.handleOnChange(event)} />
                            <Message success header="Challenge Successfully created" content="You're new challenge has started. Good Luck!" />
                            <Button>Create</Button>
                        </Form>
                    </React.Fragment>
                </Grid.Row>
            </Grid>
        )
    }


    

}

export default connect(null, { postChallenge })(ChallengeForm)