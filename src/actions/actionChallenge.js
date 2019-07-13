import moment from 'moment'

//POST new user challenge to the db
export const postChallenge = formData => {
    //Grab the logged in user's token    
    let token = localStorage.getItem('token')

    //creating the 100 days of calendar dates to be created in the server
    let start = moment(formData.dayCreated, "MM-DD-YYYY")
    let calendar = []
    for (let i=0; i < 101; i++) {
        //months defined below is current month - 1 due to moment setting jan with 0
        let { years, months, date } = start.toObject()
        months = months + 1
        let calendarDate = { years, months, date }
        start = start.add(1, 'd')
        calendar.push(calendarDate)
    }

    return (dispatch) => {
        dispatch({ type: "LOADING_CHALLENGE"});
        return fetch('http://localhost:3001/api/v1/challenges.json', {
                    method: 'POST',
                    body: JSON.stringify({challenge: formData, calendar: calendar}),
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    dispatch({ type: "POST_CHALLENGE", payload: data })
                    dispatch({ type: "POST_NEW_CALENDAR", payload: data.calendars })
                })
                .catch(error => console.log("Error" + error))
    }
}

//GET everyones challenges 
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
                dispatch({ type: "FETCH_CHALLENGES", data })})
            .then(data => dispatch({ type: "UPDATE_DAYS" }))
            .catch(error => console.log("Error" + error))
    }
}

//Get the logged in user's challenges
export const getUserChallenges = () => {
    let token = localStorage.getItem('token')
    return dispatch => {
        dispatch({ type: "LOADING_CHALLENGE"});
        return (
            fetch('http://localhost:3001/api/v1/user/challenges', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(req => req.json())
            .then(data => {
                dispatch({ type: "ADD_USER_CHALLENGES", payload: data })
                return data
            })
            .then(data => {
                const updatedDays = updateDays(data)
                dispatch({ type: "UPDATE_DAYS", payload: updatedDays })
                // dispatch({ type: "SET_CALENDAR_STATE", payload: data })
            })//once the user challenges is received, then we can update the days accordingly
            .catch(error => console.log("Error" + error))
        )
    }
}

const updateDays = data => {

    return (
        data.map(challenge => {
            const currentDate = moment(new Date()).format("MM-DD-YYYY")
    
            let dayCreated = moment(challenge.dayCreated).format('MM-DD-YYYY')
            let lastDay = moment(challenge.lastDay).format("MM-DD-YYYY")

            if (moment(currentDate, "MM-DD-YYYY").isSameOrBefore(lastDay, "MM-DD-YYYY")) {
                let diff = 100 - moment(currentDate, "MM-DD-YYYY").diff(dayCreated, 'days')
        
                if (challenge.daysLeft !== diff) {
                    challenge.daysLeft = diff
                } 
            } //else statement once the date is after the last day of the challenge

            let canClickButton = moment(new Date()).format("MMM D YY, h:mm a")

            //if the current time is after the timeToClick attribute, set challenge.clicked to false
            if (moment(canClickButton, "MMM D YY, h:mm a").isAfter(challenge.timeToClick, "MMM D YY, h:mm a")) {
                challenge.clicked = false
            }

            return challenge
        })
    )
}

//Update the challenge's info stating the button was clicked once today. 
export const buttonClickUpdateChallenge = (id) => {
    let token = localStorage.getItem('token')
    return (dispatch, getState) => {
        //grab the current challenge state and filter to get the challenge which was clicked by using id
        let userChallenges = getState().challenges
        let userChallenge = userChallenges.filter(challenge => challenge.id == id)[0]
        //grab the current time and set to moment format ("MMM D YY, h:mm a")
        const currentTimeMoment = moment()
        const currentTime = currentTimeMoment.format("MMM D YY, h:mm a")
        //set dayAfter to the start of (12 am) of the next day
        const dayAfterCurrentTime = moment(currentTime).add(1, 'd').startOf('day').format("MMM D YY, h:mm a")

        // if the current time is after the challenge's dayAfter time, update the clicked, timeClicked, and timeToClick attributes
        if (moment(currentTime, "MMM D YY, h:mm a").isSameOrAfter(userChallenge.timeToClick, "MMM D YY, h:mm a")) {
            userChallenge.clicked = true
            userChallenge.timeClicked = currentTime
            userChallenge.timeToClick = dayAfterCurrentTime
            let currentTimeServer = currentTimeMoment.format("M DD YYYY")
            
            const postUpdateUrl = `http://localhost:3001/api/v1/challenges/${id}`
            
            return (
                fetch(postUpdateUrl, {
                    method: "PATCH",
                    body: JSON.stringify({challenge: userChallenge, currentTime: currentTimeServer}),
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

//Delete user's challenge
export const deleteChallenge = (id) => {
    let token = localStorage.getItem("token")
    let deleteUrl = `http://localhost:3001/api/v1/challenges/${id}`
    return (dispatch, getState) => {
        fetch(deleteUrl, {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(req => req.json())
        .then(data => dispatch({ type: "DELETE_CHALLENGE", id }))
        .catch(error => {console.log(error)})
    }
}

