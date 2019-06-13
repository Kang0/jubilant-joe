import moment from 'moment';

export default function manageChallenge(state = {
    challenges: []
}, action) {
    switch(action.type) {

        //GET after mount all user's challenges
        case 'FETCH_CHALLENGES':
            console.log("successfully retireved", action.data)
            return {
                ...state,
                challenges: action.data
            }

        case 'LOADING_CHALLENGE':
            return {
                ...state
            }

        case 'UPDATE_DAYS':
            const update = updateDays(state.challenges)
            return {
                ...state,
                challenges: update
            }

        //event handlers, submit, click
        case 'POST_CHALLENGE':
            return {
                ...state,
                challenges: [...state.challenges, action.challenge]
            }
        
        case 'CLICK_BUTTON':
            debugger;
            return {
                ...state,
                challenges: state.challenges.map(challenge => challenge.id === action.payload.id ? action.payload : challenge)
            }

        default:
            return state
    }
}

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
                debugger;
                challenge.clicked = false
            }

            return challenge
        })
    )
}

//had to put updateDays here due to the async actions, need to have state loaded first before being able to update the days