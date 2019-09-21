import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import moment from 'moment';
import CalendarContainer from './CalendarContainer';
import ChallengeInformation from '../components/challenges/ChallengeInformation';
import ChallengeMediaContainer from '../containers/ChallengeMediaContainer'

class ChallengeDetailsContainer extends Component {

    state = {
        id: this.props.id,
        calendarDate: moment().format("YYYY-M-D")
    }

    handleCalendarClick = (date) => {
        this.setState({
            calendarDate: date
        })
    }

    render(){
        let { id, dayCreated, lastDay, daysLeft, clicked, handleOnButtonClick, handleDeleteClick } = this.props
        return(
            <Grid columns={3} divided container>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <CalendarContainer key={id} id={id} startDate={dayCreated} endDate={lastDay} handleCalendarClick={this.handleCalendarClick} />
                        <br />
                        <Button negative id={id} onClick={handleDeleteClick}>Delete</Button>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <ChallengeInformation key={id} daysLeft={daysLeft} dayCreated={dayCreated} lastDay={lastDay} clicked={clicked} handleOnButtonClick={handleOnButtonClick} id={id}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ChallengeMediaContainer calendarDate={this.state.calendarDate} id={id}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default ChallengeDetailsContainer