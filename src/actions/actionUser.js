//user actions that only return dispatch arguments
const requestLogin = userInfo => {
    return {
        type: "LOGIN_REQUEST",
        isFetching: true,
        isAuthenticated: false,
        userInfo
    }
}

const receiveLogin = token => {
    return {
        type: "LOGIN_SUCCESS",
        isFetching: false,
        isAuthenticated: true,
        token: token
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


//actions that fetch to the server
export const loginUser = userInfo => {
    let url = "http://localhost:3001/login"

    return dispatch => {
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
                if (data.success) {
                    console.log("Sucessfully Logged In")
                    localStorage.setItem("token", data.token)
                    dispatch({ type: "SET_USER_STATE"} )
                } else {
                    console.log("The returned data was not correct")
                }
            })
    )}
}

export const getUser = () => {
    let token = localStorage.getItem('token')
    return dispatch => {
        return(
            fetch('http://localhost:3001/user/find_user', {
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

export const logoutUser = () => {
    return dispatch => {
        localStorage.clear()
        return dispatch({ type: "LOGOUT_USER" })
    }
}

