export default function userReducer(state = {
    username: '',
    email: '',
    id: ''
}, action) {
    switch(action.type) {
        case "SET_USER_STATE":
            let { username, email, id } = action.payload
            return { username, email, id }

        default:
            return state
    }
}