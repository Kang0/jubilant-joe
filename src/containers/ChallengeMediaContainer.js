import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import "../index.css";
import moment from 'moment';
import NoteForm from '../components/challenges/NoteForm';

class ChallengeMediaContainer extends Component {

    handleNote = (selectedDate, currentMonth, currentDay, month, day) => {

        if(currentMonth === month && currentDay === day){
            let challengeId = selectedDate['challenge_id']
            let dateId = selectedDate['id']
            return(
                selectedDate['note'].length === 0 ? <NoteForm challengeId={challengeId} dateId={dateId}/> : <p>{selectedDate['note']}</p>
            )
        } else {
            return(
                selectedDate['note'].length === 0 ? <p>No note taken for this day</p> : <p>{selectedDate['note']}</p>
            )
        }
    }

    render(){
        let { calendarDate, id, challengeDate } = this.props
        //returns ["YYYY", "M", "D"]
        //once the calendar state has been loaded...
        if(challengeDate.length > 0) {
            const currentMonth = moment().format("M")
            const currentDay = moment().format('D')
            let calendarDateArray = calendarDate.split("-")
            let month = calendarDateArray[1]
            let day = calendarDateArray[2]
            //choose the selected date the user clicked on the calendar
            let selectedDate = challengeDate[0][id].find(challenge => challenge["months"] == month && challenge["date"] == day)
            let fullDate = moment(calendarDate, "YYYY-M-D").format("dddd, MMMM Do YYYYY")

            return(
                <div>
                    <h4>{fullDate}</h4>
                    <Segment>
                        {this.handleNote(selectedDate, currentMonth, currentDay, month, day)}
                    </Segment>
                </div>
            )
        } else {
            return(
                <p>Stil Loading</p>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    let { id } = ownProps
    return {
        challengeDate: state.calendar.filter(challenge => challenge[id])
    }
}

export default connect(mapStateToProps)(ChallengeMediaContainer)