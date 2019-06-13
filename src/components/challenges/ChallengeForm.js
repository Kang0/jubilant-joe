import React, { Component } from 'react';
import moment from 'moment';

class ChallengeForm extends Component {

    state = {
        name: '',
        dayCreated: '',
        daysLeft: 100,
        lastDay: ''
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
        const lastDay = moment(dayCreated, "MM-DD-YYYY").add('days', 100).format('MM-DD-YYYY')
        this.setState({
            dayCreated: dayCreated,
            lastDay: lastDay
        })
    }

    render () {
        return (
            <React.Fragment>
                <form onSubmit={event=>this.handleOnSubmit(event)}>
                    <input type="text" value={this.state.name} onChange={event => this.handleOnChange(event)} />
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }


    

}

export default ChallengeForm