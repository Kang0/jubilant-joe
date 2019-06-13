import moment from 'moment'

//POST new user challenge to the db
export const postChallenge = formData => {
    debugger;
    let token = localStorage.getItem('token')
    return (dispatch) => {
        dispatch({ type: "LOADING_CHALLENGE"});
        return fetch('http://localhost:3001/api/v1/challenges.json', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(resp => resp.json())
                .then(challenge => {dispatch({ type: "POST_CHALLENGE", challenge })})
                .catch(error => console.log("Error" + error))
    }
}

//GET user's challenges 
export const getChallenges = () => {
    let token = localStorage.getItem('token')
    return (dispatch, getState) => {
        dispatch({ type: "LOADING_CHALLENGE"});
        return fetch('http://localhost:3001/api/v1/challenges.json', {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data) 
                dispatch({ type: "FETCH_CHALLENGES", data })})
            .then(data => dispatch({ type: "UPDATE_DAYS" }))
            .catch(error => console.log("Error" + error))
    }
}

//Update the challenge's info stating the button was clicked once today. 
export const buttonClickUpdateChallenge = () => {
    return (dispatch, getState) => {
        let userChallenges = getState().manageChallenge.challenges

        userChallenges.map(challenge => {
            let currentTime = moment(new Date()).format("MMM D YY, h:mm a")
            let dayAfterCurrentTime = moment(currentTime).add(1, 'd').format("MMM D YY, h:mm a")

            if (moment(currentTime).isAfter(challenge.timeToClick)) {
                challenge.clicked = true
                challenge.timeClicked = currentTime
                challenge.timeToClick = dayAfterCurrentTime
            }
            debugger;
        })
    }
}

