import moment from 'moment'

//POST new user challenge to the db
export const postChallenge = formData => {
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

//GET user's information
// export const getUser = () => {
//     let token = localStorage.getItem('token')
//     return dispatch => {
//         return fetch('http://localhost:3001/user/challenges', {
//             method: "GET",
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'key': `${token}`
//             }
//         })
//     }
// }

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
export const buttonClickUpdateChallenge = (id) => {
    let token = localStorage.getItem('token')
    return (dispatch, getState) => {
        //grab the current challenge state and filter to get the challenge which was clicked by using id
        let userChallenges = getState().challenges
        let userChallenge = userChallenges.filter(challenge => challenge.id == id)[0]
        //grab the current time and set to moment format ("MMM D YY, h:mm a") and add one day to the current time
        const currentTime = moment(new Date()).format("MMM D YY, h:mm a")
        const dayAfterCurrentTime = moment(currentTime).add(1, 'd').format("MMM D YY, h:mm a")

        if (moment(currentTime).isAfter(userChallenge.timeToClick)) {
            userChallenge.clicked = true
            userChallenge.timeClicked = currentTime
            userChallenge.timeToClick = dayAfterCurrentTime

            
            const postUpdateUrl = `http://localhost:3001/api/v1/challenges/${id}`

            debugger;
            
            return (fetch(postUpdateUrl, {
                method: "PATCH",
                body: JSON.stringify(userChallenge),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(req => req.json())
            .then(data => dispatch({ type: "CLICK_BUTTON", payload: data }))
            .catch(error => {console.log(error)})
            )
        }      
    }
}

