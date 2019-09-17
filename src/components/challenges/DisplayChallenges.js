import React, { Component } from 'react';
import ChallengeCard from './ChallengeCard';
import { Accordion } from 'semantic-ui-react';
import ChallengeDetailsContainer from '../../containers/ChallengeDetailsContainer';
import '../../App.css';


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
                        <ChallengeCard key={id} challenge={challenge} handleCardClick={this.handleCardClick} />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === id}>
                        <ChallengeDetailsContainer
                            id={id}
                            dayCreated={dayCreated}
                            lastDay={lastDay}
                            daysLeft={daysLeft}
                            clicked={clicked}
                            handleDeleteClick={this.handleDeleteClick}
                            handleOnButtonClick={this.handleOnButtonClick}
                        />
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