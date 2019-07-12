export default function calendarReducer(state = [], action) {
    switch(action.type) {
        case "ADD_USER_CALENDARS":
            console.log("Calendars", action.payload)
            return [...action.payload]

        // case "SET_CALENDAR_STATE":
        //     let calendarArray = action.payload.map(challenge => {
        //         let challengeCalendar = {}
        //         challengeCalendar[challenge.id] = challenge.calendars
        //         return challengeCalendar
        //     })
        //     return calendarArray
        
        case "POST_NEW_CALENDAR":
            let challengeCalendar = {}
            challengeCalendar[action.payload[0].challenge_id] = action.payload
            return [...state, challengeCalendar]
        
        case "LOGOUT_CALENDAR":
            return []

        default:
            return state
    }
}