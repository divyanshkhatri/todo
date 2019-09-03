import firebase from 'firebase';

export const add = ( {notes} ) => {
    console.log(notes);

    const { currentUser } = firebase.auth();

    return( (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes`)
        .push( {notes} )
        .then(()=> {
            dispatch({type: addNotes});
        })
    })
}