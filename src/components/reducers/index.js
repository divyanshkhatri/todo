import {combineReducers} from 'redux';
import Main from './mainReducer';
import Login from './loginReducer';

export default combineReducers({
    Main: Main,
    Login: Login
})