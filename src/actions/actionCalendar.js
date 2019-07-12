export const submitNote = (note, challengeId, dateId) => {
    let token = localStorage.getItem('token')

    return (dispatch) => {
        dispatch({type: "LOADING_NOTE"})
        return fetch(`http://localhost:3001/api/v1/challenges/${challengeId}/calendars/${dateId}`, {
            method: "PATCH",
            body: JSON.stringify({note: note}),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(req => req.json())
        .then(data => {
            debugger
        })
    }
    debugger
}