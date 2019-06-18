import React, { Component } from 'react';
import ChallengeCard from './ChallengeCard'
import { Card, Accordion, Button } from 'semantic-ui-react'
import ChallengeCalendar from '../calendar/ChallengeCalendar'
import '../../App.css'


class DisplayChallenges extends Component {

    state = { activeIndex: 0 } //keeping track of which accordion is open

    handleOnButtonClick = event => {
        this.props.buttonClick(event.target.id)
        //passing in the challenge id as an argument
        this.props.clickAddTwoCurrency()
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
            return(
                <React.Fragment>
                    <Accordion.Title active={activeIndex === challenge.id} index={challenge.id} onClick={this.handleCardClick} >
                        <ChallengeCard challenge={challenge} handleCardClick={this.handleCardClick} handleOnButtonClick={this.handleOnButtonClick} />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === challenge.id}>
                        <ChallengeCalendar dates={challenge.calendars} />
                        <Button negative id={challenge.id} onClick={this.handleDeleteClick}>Delete</Button>
                    </Accordion.Content>
                </React.Fragment>
            )
        })

        return(
            <div>
                <Accordion fluid styled>
                    {renderChallenge}
                </Accordion>
            </div>
        )
    }
    
}

export default DisplayChallenges