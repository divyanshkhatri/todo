import addNotes from '../actions/addNotes';
const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'loggedIn': 
            return { ...state, user: action.payload }
        default: 
            return INITIAL_STATE;
    }
}