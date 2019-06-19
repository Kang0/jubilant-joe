export default function calendarReducer(state = [], action) {
    switch(action.type) {
        case "SET_CALENDAR_STATE":
            let calendarArray = action.payload.map(challenge => {
                let challengeCalendar = {}
                challengeCalendar[challenge.id] = challenge.calendars
                return challengeCalendar
            })
            return calendarArray
        
        case "UPDATE_CALENDAR":
            let challengeCalendar = {}
            challengeCalendar[action.payload[0].challenge_id] = action.payload
            return [...state, challengeCalendar]

        default:
            return state
    }
}