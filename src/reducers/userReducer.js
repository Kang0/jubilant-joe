export default function userReducer(state = [], action) {
    switch(action.type) {
        case "SET_USER_STATE":
            let { username, email, id } = action.payload
            debugger;
            return [{ username, email, id }]

        default:
            return state
    }
}