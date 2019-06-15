import React, { Component } from 'react';

class DisplayChallenges extends Component {

    handleOnClick = event => {
        this.props.buttonClick(event.target.id)
        //passing in the challenge id as an argument
        this.props.clickAddTwoCurrency()
    }
    
    render() {
        const renderChallenge = this.props.challenges.map(challenge => {
            if(challenge.clicked) {
                return (
                    <div>
                        <li key={challenge.id}>
                            {challenge.name} - {challenge.daysLeft}
                            <button value="disable" disabled>Already completed for the day</button>
                        </li>
                    </div>
                )
            } else {
                return (
                    <div>
                        <li key={challenge.id}>
                            {challenge.name} - {challenge.daysLeft}
                            <button id={challenge.id} onClick={event => this.handleOnClick(event)}>I did this today</button>
                        </li>
                    </div>
                )
            }
        })

        return(
            <div>
                {renderChallenge}
            </div>
        )
    }
    
}

export default DisplayChallenges