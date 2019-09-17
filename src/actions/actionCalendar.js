export const getUserCalendar = () => {
    let token = localStorage.getItem('token')
    return dispatch => {
        dispatch({ type: "LOADING_CALENDAR" })
        return (
            fetch("https://rails-server-100-days.herokuapp.com/api/v1/user/calendars", {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(req => req.json())
                .then(data => {
                    dispatch({ type: 'ADD_USER_CALENDARS', payload: data })
                })
        )
    }
}

export const submitNote = (note, challengeId, dateId) => {
    let token = localStorage.getItem('token')

    return (dispatch) => {
        dispatch({ type: "LOADING_NOTE" })
        return fetch(`https://rails-server-100-days.herokuapp.com/api/v1/challenges/${challengeId}/calendars/${dateId}`, {
            method: "PATCH",
            body: JSON.stringify({ note: note }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(req => req.json())
            .then(data => {
                dispatch({ type: "UPDATE_CALENDAR_DATE", payload: data })
            })
    }
}