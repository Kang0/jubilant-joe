export default function userReducer(state = {
    username: '',
    email: '',
    message: ''
}, action) {
    switch(action.type) {
        case "LOGIN_REQUEST":
            return state

        case "LOGIN_SUCCESS":
            //returns isFetching: false, isAuthenticated: true, userInfo
            let { username, email, message } = action.user
            return { username, email, message }
        
        case "LOGIN_FAILURE":
            return {...state, message: action.message}

        case "LOGOUT_USER":
            return { username: "", email: "", message: ""}

        default:
            return state
    }
}