import React, { Component } from 'react';
import ChallengeCard from './ChallengeCard'
import { Accordion, Button } from 'semantic-ui-react'
import ChallengeCalendar from '../../containers/CalendarContainer'
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
            debugger;
            return(
                <Accordion key={challenge.id} fluid styled>
                    <Accordion.Title active={activeIndex === challenge.id} index={challenge.id} onClick={this.handleCardClick} >
                        <ChallengeCard key={challenge.id} challenge={challenge} handleCardClick={this.handleCardClick} handleOnButtonClick={this.handleOnButtonClick} />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === challenge.id}>
                        <ChallengeCalendar key={challenge.id} dates={challenge.calendars} />
                        <Button negative id={challenge.id} onClick={this.handleDeleteClick}>Delete</Button>
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