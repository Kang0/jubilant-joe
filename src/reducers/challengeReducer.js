export default function challengeReducer(state = [], action) {
    switch(action.type) {

        //GET after mount all user's challenges
        case 'ADD_USER_CHALLENGES':
            console.log("successfully retrieved", action.payload)
            return action.payload

        case 'LOADING_CHALLENGE':
            return state

        case 'UPDATE_DAYS':
            return action.payload

        //event handlers, submit, click
        case 'POST_CHALLENGE':
            return [...state, action.payload]
        
        case 'CLICK_BUTTON':
            return state.map(challenge => challenge.id === action.payload.id ? action.payload : challenge)
        
        case 'DELETE_CHALLENGE':
            return [...state.filter(challenge => challenge.id !== action.id.id)]

        case 'LOGOUT_CHALLENGES':
            return []

        default:
            return state
    }
}


