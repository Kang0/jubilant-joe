import React, { Component } from 'react';

class DisplayChallenges extends Component {

    handleOnClick = () => {
        this.props.buttonClick()
    }
    
    render() {
        const renderChallenge = this.props.challenges.map(challenge => {
            return(
                <>
                    <li key={challenge.id}>
                        {challenge.name} - {challenge.daysLeft}
                    </li>
                    <button onClick={this.handleOnClick}>I did this today</button>
                </>
            )
        })

        return(
            <div>
                {renderChallenge}
            </div>
        )
    }
    
}

export default DisplayChallenges