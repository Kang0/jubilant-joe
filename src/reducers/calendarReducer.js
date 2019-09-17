export default function calendarReducer(state = [], action) {
    switch(action.type) {
        case "ADD_USER_CALENDARS":
            console.log("Calendars", action.payload)
            return [...action.payload]
        
        case "POST_NEW_CALENDAR":
            let challengeCalendar = {}
            challengeCalendar[action.payload[0].challenge_id] = action.payload
            return [...state, challengeCalendar]
        
        case "UPDATE_CALENDAR_DATE":
            let { id } = action.payload
            let updatedCalendar = state.map(challenge => {
                return(
                    challenge.map(date => date.id === id ? action.payload : date)
                )
            })
            return updatedCalendar
        
        case "LOGOUT_CALENDAR":
            return []

        default:
            return state
    }
}