import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../index.css"
import moment from 'moment'
import NoteForm from '../components/challenges/NoteForm'

class ChallengeMediaContainer extends Component {
    render(){
        let { calendarDate, id, challengeDate } = this.props
        //returns ["YYYY", "M", "D"]
        let calendarDateArray = calendarDate.split("-")
        //once the calendar state has been loaded...
        if(challengeDate.length > 0) {
            const currentMonth = moment().format("M")
            const currentDay = moment().format('D')
            let month = calendarDateArray[1]
            let day = calendarDateArray[2]
            //choose the selected date the user clicked on the calendar
            let selectedDate = challengeDate[0][id].find(challenge => challenge["months"] == month && challenge["date"] == day)

            if(currentMonth === month && currentDay === day){
                return(
                    selectedDate['note'].length === 0 ? <NoteForm /> : <p>{selectedDate['note']}</p>
                )
            } else {
                return(
                    selectedDate['note'].length === 0 ? <p>No note taken for this day</p> : <p>{selectedDate['note']}</p>
                )
            }
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