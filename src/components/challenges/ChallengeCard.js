import React from 'react'
import { Card, Button } from 'semantic-ui-react';

const ChallengeCard = (props) => {
    debugger;

    return(
        <Card onClick={event => props.handleCardClick(event)}>
            <Card.Content>
                <Card.Header>{props.challenge.name}</Card.Header>
                <Card.Meta>You have {props.challenge.daysLeft} days to go!</Card.Meta>
                <Card.Description>
                    This is placeholder text until I can update this.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {
                    props.challenge.clicked ? 
                        <Button basic color="red" disabled>Already completed for the day</Button>
                        :
                        <Button basic color="green" id={props.challenge.id} onClick={e=>this.handleOnClick(e)}>I completed this today</Button>                               
                }
            </Card.Content>
        </Card>
    )
}

export default ChallengeCard




