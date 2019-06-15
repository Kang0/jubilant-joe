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