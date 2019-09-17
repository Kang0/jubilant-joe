export const getLocker = () => {
    let token = localStorage.getItem('token')
    return dispatch => {
        return(
            fetch('https://rails-server-100-days.herokuapp.com/user/locker', {
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
            fetch('https://rails-server-100-days.herokuapp.com/user/updatelocker', {
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