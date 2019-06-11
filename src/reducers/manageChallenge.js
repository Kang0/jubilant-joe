export function manageChallenge(state = {
    challenges: []
}, action) {
    switch(action.type) {
        case 'ADD_CHALLENGE':
            return {
                ...state,
                challenges: [...state.challenges, action.formData]
            }
            
        default:
            return state
    }
}