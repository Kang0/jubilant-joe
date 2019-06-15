export default function lockerReducer(state = [], action) {
    switch(action.type) {
        case "GET_LOCKER":
            let { username, email, id } = action.payload
            return [{ username, email, id }]

        default:
            return state
    }
}