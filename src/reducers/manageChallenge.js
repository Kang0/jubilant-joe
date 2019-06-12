export default function manageChallenge(state = {
    challenges: []
}, action) {
    switch(action.type) {

        case 'FETCH_CHALLENGES':
            debugger;
            console.log("successfully retireved", action.data)
            return {
                ...state,
                challenges: action.data
            }

        case 'LOADING_CHALLENGE':
            return {
                ...state
            }

        case 'POST_CHALLENGE':
            debugger;
            return {
                ...state,
                challenges: [...state.challenges, action.challenge]
            }

        default:
            return state
    }
}