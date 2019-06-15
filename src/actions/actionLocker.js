export const getLocker = () => {
    let token = localStorage.getItem('token')
    return dispatch => {
        return(
            fetch('http://localhost:3001/user/locker', {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => dispatch({ type: 'SET_LOCKER_STATE', payload: data}))
            .catch(error => console.log(error))
        )
    }
}

export const clickAddTwoCurrency = () => {
    let token = localStorage.getItem('token')
    return (dispatch, getState) => {
        let locker = getState().locker
        locker.currency += 2
        debugger;
        return(
            fetch('http://localhost:3001/user/updatelocker', {
                method: "PATCH",
                body: JSON.stringify(locker),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        )
    }
}