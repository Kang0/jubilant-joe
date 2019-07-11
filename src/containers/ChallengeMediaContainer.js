import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChallengeMediaContainer extends Component {
    render(){
        let { calendarDate, id, challengeDate } = this.props
        //returns ["YYYY", "M", "D"]
        let calendarDateArray = calendarDate.split("-")
        if(challengeDate.length > 0) {
            let month = calendarDateArray[1]
            let day = calendarDateArray[2]
            let selectedDate = challengeDate[0][id].find(challenge => challenge["months"] == month && challenge["date"] == day)
            return(
                <div>
                    <h3>Month {selectedDate["months"]}</h3>
                    <h4>Day {selectedDate["date"]}</h4>
                    <h4>Year {selectedDate["years"]}</h4>
                </div>
            )
        } else {
            return(
                <p>Not Loaded</p>
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