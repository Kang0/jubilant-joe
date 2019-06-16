import React from 'react'
import { Card, Button } from 'semantic-ui-react';

const ChallengeCard = ({ handleCardClick, challenge, handleOnButtonClick }) => {

    return(
        <Card onClick={event => handleCardClick(event)}>
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
                        <Button basic color="green" id={challenge.id} onClick={e=>handleOnButtonClick(e)}>I completed this today</Button>                               
                }
            </Card.Content>
        </Card>
    )
}

export default ChallengeCard




