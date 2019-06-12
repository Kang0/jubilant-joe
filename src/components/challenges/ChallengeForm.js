import React, { Component } from 'react';

class ChallengeForm extends Component {

    state = {
        name: '',
        daysLeft: 100,
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