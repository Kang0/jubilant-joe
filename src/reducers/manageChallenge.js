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

        case 'POST_CHALLENGE':
            return {
                ...state,
                challenges: [...state.challenges, action.challenge]
            }

        default:
            return state
    }
}

const updateDays = data => {

    return (
        data.map(challenge => {
            const currentDate = moment(new Date())
            const myDate = currentDate.format('MM-DD-YYYY')

            let t = "06-09-2019"
    
            let dayCreated = moment(challenge.dayCreated)
            let lastDay = moment(challenge.lastDay)

            if (moment(myDate).isSameOrBefore(lastDay._i)) {
                let diff = 100 - moment(myDate).diff(t, 'days') //change t to dayCreated._i
        
                if (challenge.daysLeft !== diff) {
                    challenge.daysLeft = diff
                } 
            }

            return challenge
        })
    )
}