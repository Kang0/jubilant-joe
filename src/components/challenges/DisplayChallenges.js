import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class DisplayChallenges extends Component {

    handleOnClick = event => {
        this.props.buttonClick(event.target.id)
        //passing in the challenge id as an argument
        this.props.clickAddTwoCurrency()
    }
    
    render() {
        const renderChallenge = this.props.challenges.map(challenge => {
            return(
                <Card>
                    <Card.Content>
                        <Card.Header>{challenge.name}</Card.Header>
                        <Card.Meta>You have {challenge.daysLeft} days to go!</Card.Meta>
                        <Card.Description>
                            This is placeholder text until I can update this.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {
                            challenge.clicked ? 
                                <Button basic color="red" disabled>Already completed for the day</Button>
                                :
                                <Button basic color="green" id={challenge.id} onClick={e=>this.handleOnClick(e)}>I completed this today</Button>                               
                        }
                    </Card.Content>
                </Card>
            )
        }) 

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