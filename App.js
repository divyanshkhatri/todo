import React, { Component } from 'react';
import firebase from 'firebase';
import Main from './src/components/main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/components/reducers';
import Router from './src/router';

class App extends Component {

    componentDidMount() {

        var firebaseConfig = {
            apiKey: "AIzaSyDgu840xfvwgmZb1ZUogSX3Usp0aN5aHqE",
            authDomain: "todo4311.firebaseapp.com",
            databaseURL: "https://todo4311.firebaseio.com",
            projectId: "todo4311",
            storageBucket: "",
            messagingSenderId: "681948607715",
            appId: "1:681948607715:web:d98bf2d40d90cb0d"
          }; 
          firebase.initializeApp(firebaseConfig);
    }

    render(){
        return(

            <Provider 
                style = {{flex: 1}}
                store = { createStore(reducers, {}, applyMiddleware(ReduxThunk)) }
                >
                <Router />
            </Provider>
        ) 
    }
}

export default App;