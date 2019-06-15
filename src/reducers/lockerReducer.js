export default function lockerReducer(state = {
    currency: 0
}, action) {
    switch(action.type) {
        case "SET_LOCKER_STATE":
            let { currency } = action.payload
            return { currency }

        default:
            return state
    }
}