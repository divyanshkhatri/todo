import React, {Component} from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux'; 
import { AsyncStorage } from 'react-native';
import Main from './components/main';
import Login from './components/login';

class RouterComponent extends Component {

    // constructor(props){
    //     super(props)
    //     AsyncStorage.getItem('username')
    //         .then((userToken) => {
    //         if(userToken ? Actions.loggedIn() : Actions.auth());
    //     })
    // }

    render(){
        return(
            <Router {...sceneConfig}>
                <Scene key = "root" hideNavBar>
                    <Scene key = "auth" initial>
                        <Scene key = "Login" component = {Login} title = "" navTransparent hideNavBar initial/>
                    </Scene>
                    <Scene key = "loggedIn">
                        <Scene key = "Main" component = {Main} title = "" hideNavBar initial/>
                    </Scene>
                </Scene>
            </Router>
        )
    }

}
var sceneConfig = {
    cardStyle: {
      backgroundColor: 'white'
    }
}


export default RouterComponent;
