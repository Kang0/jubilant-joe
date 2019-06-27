import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react';
import '../../index.css'

class ChallengeCard extends Component {

    state = {
        likes: 0
    }

    handleLikeButton = () => {
        this.setState(
            {likes: this.state.likes + 1}
        )
    }

    render(){
        let { handleCardClick, challenge, handleOnButtonClick } = this.props
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
                <Card.Content extra>
                    {
                        challenge.clicked ? 
                            <Button basic color="red" disabled>Already completed for the day</Button>
                            :
                            <Button basic color="green" id={challenge.id} onClick={e=>handleOnButtonClick(e)}>I completed this today</Button>
                    }
                </Card.Content>
                <Button onClick={this.handleLikeButton}>Like {this.state.likes}</Button>
            </Card>
        )}
}

export default ChallengeCard




