export const addChallenge = formData => {
    return ({
        type: "ADD_CHALLENGE",
        formData
    })
}

export const postChallenge = formData => {
    return(
        fetch('http://localhost:3001/api/v1/challenges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                daysLeft: formData.daysLeft
            })
        })
        .then(response => response.json())
        .then(r => console.log(r))
    )
}