export default function userReducer(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem("token") ? true : false,
    username: '',
    email: '',
    message: ''
}, action) {
    //these two states will always be sent from the action 
    let { isFetching, isAuthenticated } = action

    switch(action.type) {
        case "LOGIN_REQUEST":
            return { ...state, isFetching, isAuthenticated }

        case "LOGIN_SUCCESS":
            //returns isFetching: false, isAuthenticated: true, userInfo
            let { username, email, message } = action.user
            return { ...state, username, email, message, isFetching, isAuthenticated }
        
        case "LOGIN_FAILURE":
            return { ...state, isAuthenticated, isFetching, message: action.message }

        case "LOGOUT_USER":
            return { ...state, username: "", email: "", message: "", isAuthenticated, isFetching }
        

        default:
            return state
    }
}