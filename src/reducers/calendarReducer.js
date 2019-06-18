export default function calendarReducer(state = [], action) {
    switch(action.type) {
        case "SET_CALENDAR_STATE":
            let { currency } = action.payload
            return { currency }

        default:
            return state
    }
}