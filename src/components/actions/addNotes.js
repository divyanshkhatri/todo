import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

export const onAuth = ( {username, password, name} ) => {
    return((dispatch) => {
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then((user) => {
                dispatch({ type: 'loggedIn', payload: user })
                console.log(user, name);
                Actions.loggedIn({names: name});
            })
            .catch(()=> {
                firebase.auth().createUserWithEmailAndPassword(username, password)
                .then((user) => {
                    dispatch({ type: 'loggedIn', payload: user })
                    Actions.loggedIn({name});
                    console.log(user)
                })
                .catch((err) => {
                    dispatch({ type: 'loginFailed' })
                    console.log(err)
                })
            })
    })
}

export const add = ( { notes } ) => {


    const { currentUser } = firebase.auth();
    console.log("Current User Uid = " + currentUser.uid)
    return( (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes/`)
        .push( { notes } )
        .then(()=> {
            dispatch({type: 'addNotes' });
        })
    })
}

export const displayNotes = () => {

    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes`)
            .on('value', snapshot => {
                a = _.toArray(snapshot.val())
                i = 0;
                b= [];
                while(i<a.length){
                    b.push(a[i].notes)
                    i++;
                }
                dispatch({ type: 'display', payload: b });
                console.log(b);
        });
    };
}