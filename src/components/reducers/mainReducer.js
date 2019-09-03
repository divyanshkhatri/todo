import addNotes from '../actions/addNotes';

const INITIAL_STATE = {};

export default (state =  INITIAL_STATE, action) => {
    switch(action.type){
        case addNotes: 
            return INITIAL_STATE;
        default: 
            return state;
    }
}