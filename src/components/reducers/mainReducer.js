import addNotes from '../actions/addNotes';

const INITIAL_STATE = {};

export default (state =  INITIAL_STATE, action) => {
    switch(action.type){
        case 'addNotes': 
            return state;
        case 'display': 
            return {data: action.payload}
        default: 
            return INITIAL_STATE;
    }
}