import React from 'react';
import '../../index.css';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';

const ChallengeInformation = props => {

    let { daysLeft, dayCreated, lastDay } = props
    let daysCompleted = 100 - daysLeft
    let fullStartDate = moment(dayCreated, "MM-DD-YYYY").format("dddd, MMMM Do YYYY")
    let fullEndDate = moment(lastDay, "MM-DD-YYYY").format("dddd, MMMM Do YYYY")

    return(
        <div>
            <h4 class="information number">{daysCompleted} <span class="number-text">days completed</span></h4>
            <h4 class="information dates">{fullStartDate}</h4>
            <Icon name="long arrow alternate down" size="huge"></Icon>
            <h4 class="information dates">{fullEndDate}</h4>
        </div>
    )
}

export default ChallengeInformation