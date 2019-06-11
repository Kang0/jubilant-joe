export const postChallenge = formData => {
    return (dispatch) => {
        dispatch({ type: "LOADING_CHALLENGE"});
        return fetch('http://localhost:3001/api/v1/challenges.json', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(challenge => dispatch({ type: "POST_CHALLENGE", challenge}))
                .catch(error => console.log("Error" + error))
    }
}

export const getChallenges = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_CHALLENGE"});
        return fetch('http://localhost:3001/api/v1/challenges.json')
            .then(resp => resp.json())
            .then(data => dispatch({ type: "FETCH_CHALLENGES", data}))
            .catch(error => console.log("Error" + error))
    }
}