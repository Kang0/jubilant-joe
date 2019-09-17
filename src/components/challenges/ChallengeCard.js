import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react';
import '../../index.css'

class ChallengeCard extends Component {

    render(){
        let { handleCardClick, challenge } = this.props
        return(
            <Card fluid color={challenge.clicked ? "red" : "green"} onClick={event => handleCardClick(event)}>
                <Card.Content>
                    <Card.Header>{challenge.name}</Card.Header>
                    <Card.Description className="days-left">
                        {challenge.daysLeft}<br /><br />
                        <div class="card-text">
                            days left
                        </div>
                    </Card.Description>
                </Card.Content>
            </Card>
        )}
}

export default ChallengeCard




