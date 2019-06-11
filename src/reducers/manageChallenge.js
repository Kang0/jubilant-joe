export default function manageChallenge(state = {
    challenges: []
}, action) {
    switch(action.type) {
        case 'ADD_CHALLENGE':
            return {
                ...state,
                challenges: [...state.challenges, action.formData]
            }

        case 'POST_CHALLENGE':
            debugger;
            fetch('http://localhost:3001/api/v1/challenges.json', {
                method: 'POST',
                body: JSON.stringify({
                    "challenge": {
                        "name": 'Coding',
                        "daysLeft": 100
                    }
                }),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            }).then(resp => resp.json())
            .then(resp => console.log('Success:', JSON.stringify(resp)))
            .catch(error => console.error('Error', error))
            return(
                state
            )

            
        default:
            return state
    }
}