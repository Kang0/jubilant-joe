import moment from 'moment';

export default function challengeReducer(state = [], action) {
    switch(action.type) {

        //GET after mount all user's challenges
        case 'FETCH_USER_CHALLENGES':
            console.log("successfully retrieved", action.payload)
            return action.payload

        case 'LOADING_CHALLENGE':
            return [...state]

        case 'UPDATE_DAYS':
            const update = updateDays(state)
            return update

        //event handlers, submit, click
        case 'POST_CHALLENGE':
            return [...state, action.challenge]
        
        case 'CLICK_BUTTON':
            return state.map(challenge => challenge.id === action.payload.id ? action.payload : challenge)

        default:
            return state
    }
}

//had to put updateDays here due to the async actions, need to have state loaded first before being able to update the days
const updateDays = data => {

    return (
        data.map(challenge => {
            const currentDate = moment(new Date()).format('MM-DD-YYYY')
    
            let dayCreated = moment(challenge.dayCreated).format('MM-DD-YYYY')
            let lastDay = moment(challenge.lastDay)

            if (moment(currentDate).isSameOrBefore(lastDay._i)) {
                let diff = 100 - moment(currentDate).diff(dayCreated, 'days') //change t to dayCreated._i
        
                if (challenge.daysLeft !== diff) {
                    challenge.daysLeft = diff
                } 
            } //else statement once the date is after the last day of the challenge

            let canClickButton = moment(new Date()).format("MMM D YY, h:mm a")

            if (moment(canClickButton).isAfter(challenge.timeToClick)) {
                challenge.clicked = false
            }

            return challenge
        })
    )
}

