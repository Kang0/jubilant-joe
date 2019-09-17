//user actions that only return dispatch arguments
const requestLogin = () => {
    return {
        type: "LOGIN_REQUEST",
        isFetching: true,
        isAuthenticated: false,
    }
}

const receiveLogin = payload => {
    return {
        type: "LOGIN_SUCCESS",
        isFetching: false,
        isAuthenticated: true,
        payload
    }
}

const loginError = message => {
    return {
        type: "LOGIN_FAILURE",
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

const logoutUser = () => {
    return {
        type: "LOGOUT_USER",
        isFetching: false,
        isAuthenticated: false
    }
}


//actions that fetch to the server

export const registerUser = userInfo => {

    return dispatch => {
        fetch('https://rails-server-100-days.herokuapp.com/api/v1/registration', {
                method: "POST",
                body: JSON.stringify(userInfo),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.status) {
                    console.log(data)
                    dispatch({ type: "UPDATE_MESSAGE", payload: data.message })
                } else {
                    console.log("Unable to create user")
                    dispatch({ type: "UPDATE_MESSAGE", payload: data.message })
                }
            })
            .catch(error => console.log("There was an error" + error))
        }
}

export const loginUser = userInfo => {
    let url = "https://rails-server-100-days.herokuapp.com/api/v1/login"

    return dispatch => {
        //this dispatch sets the state to requesting, notifying the request has been sent
        dispatch(requestLogin(userInfo))

        return (
            fetch(url, {
                method: "POST",
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.status === "success"){
                    localStorage.setItem("token", data.token)
                    let {username, email, message} = data
                    //this dispatch sets the logged in users info
                    dispatch(receiveLogin({username, email, message}))
                } else {
                    dispatch(loginError(data.errors))
                }
            })
            .catch(error => console.log(error))
    )}
}

//getUser information, but I shouldn't need this since we set the state when the user logins
//FIX THIS
export const getUser = () => {
    let token = localStorage.getItem('token')
    return dispatch => {
        return(
            fetch('https://rails-server-100-days.herokuapp.com/user/find_user', {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(user => dispatch( { type: 'SET_USER_STATE', payload: user } ))
            .catch(error => error)
        )}
}

export const getLogout = () => {
    return dispatch => {
        localStorage.clear()
        
        dispatch(logoutUser())
        dispatch({type: "LOGOUT_CHALLENGES"})
        dispatch({type: "LOGOUT_LOCKER"})
        dispatch({type: "LOGOUT_CALENDAR"})
    }
}

