export const loginUser = userInfo => {
    let url = "http://localhost:3001/login"

    return dispatch => {
        return (
            fetch(url, {
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
                if (data.success) {
                    console.log("Sucessfully Logged In")
                    localStorage.setItem("token", data.token)
                    return getUser(userInfo, localStorage.getItem('token'))
                } else {
                    console.log("The returned data was not correct")
                }
            })
            .then(user => {
                console.log(user)
                dispatch( { type: 'SET_USER_STATE', payload: user } )
            })
            .catch(error => console.log("Error " + error))
    )}
}

const getUser = (userInfo, token) => {
    return fetch('http://localhost:3001/user/find_user', {
        method: "POST",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(userJSON => userJSON)
    .catch(error => error)
}
