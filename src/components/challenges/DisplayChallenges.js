import React, { Component } from 'react';
import ChallengeCard from './ChallengeCard'
import { Accordion, Button, Grid, Segment } from 'semantic-ui-react'
import CalendarContainer from '../../containers/CalendarContainer'
import ChallengeInformation from './ChallengeInformation'
import '../../App.css'


class DisplayChallenges extends Component {

    state = { 
        activeIndex: 0
    } //keeping track of which accordion is open

    handleOnButtonClick = event => {
        this.props.buttonClick(event.target.id)
        //passing in the challenge id as an argument
        // this.props.clickAddTwoCurrency()
    }

    handleCardClick = (event, titleProps = { index: 0 }) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    handleDeleteClick = (event, id) => {
        this.props.deleteChallenge(id)
    }
    
    render() {
        const { activeIndex } = this.state
        
        const renderChallenge = this.props.challenges.map(challenge => {
            let { id, dayCreated, lastDay, daysLeft, clicked } = challenge
            return(
                <Accordion key={id} fluid styled>
                    <Accordion.Title active={activeIndex === id} index={id} onClick={this.handleCardClick} >
                        <ChallengeCard key={id} challenge={challenge} handleCardClick={this.handleCardClick} handleOnButtonClick={this.handleOnButtonClick} />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === id}>
                        <Grid columns={3} divided container>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <CalendarContainer key={id} id={id} startDate={dayCreated} endDate={lastDay} />
                                    <br />
                                    <Button negative id={id} onClick={this.handleDeleteClick}>Delete</Button>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <ChallengeInformation key={id} daysLeft={daysLeft} dayCreated={dayCreated} lastDay={lastDay} />
                                </Grid.Column>
                                <Grid.Column width={6}>
                            
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Accordion.Content>
                </Accordion>
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