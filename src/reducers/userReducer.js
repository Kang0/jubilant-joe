export default function userReducer(state = {
    username: '',
    email: '',
    id: '',
    message: ''
}, action) {
    switch(action.type) {
        case "LOGIN_SUCCESS":
            //returns isFetching: false, isAuthenticated: true, userInfo
            let { username, email } = action.user
            return { username, email }
        
        case "LOGIN_FAILURE":
            return {...state, message: action.message}

        case "LOGOUT_USER":
            return { username: "", email: "", id: "" }

        default:
            return state
    }
}