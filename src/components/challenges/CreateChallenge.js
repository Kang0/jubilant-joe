import React, { Component } from 'react';

class CreateChallenge extends Component {

    state = {
        text: '',
        daysLeft: 100
    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    render () {
        return (
            <React.Fragment>
                <form>
                    <input type="text" value={this.state.text} onChange={event => this.handleOnChange(event)} />
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }

}