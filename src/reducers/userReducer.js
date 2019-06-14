export default function userReducer(state = [], action) {
    switch(action.type) {
        case "ADD_USER_TO_STATE":
            let { username, email } = action.payload
            return [{ username, email }]

        default:
            return state
    }
}