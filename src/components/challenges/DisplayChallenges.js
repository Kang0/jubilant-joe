import React, { Component } from 'react';
import ChallengeCard from './ChallengeCard'
import { Card } from 'semantic-ui-react'

class DisplayChallenges extends Component {

    handleOnClick = event => {
        this.props.buttonClick(event.target.id)
        //passing in the challenge id as an argument
        this.props.clickAddTwoCurrency()
    }

    handleCardClick = event => {
        debugger;
    }
    
    render() {
        
        const renderChallenge = this.props.challenges.map(challenge => <ChallengeCard challenge={challenge} handleCardClick={this.handleCardClick} handleOnClick={this.handleOnClick} />)

        return(
            <div>
                <Card.Group>
                    {renderChallenge}
                </Card.Group>
            </div>
        )
    }
    
}

export default DisplayChallenges