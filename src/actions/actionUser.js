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

