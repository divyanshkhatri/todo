import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Text, View, Image, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import { onAuth } from './actions/addNotes';

class Login extends Component {

    state = {
        username: "khatri.divyansh98@gmail.com",
        password: "Divyansh861951"
    }

    onSubmit = () => {
        username = this.state.username;
        password = this.state.password;
        AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('password', password);
        this.props.onAuth({username, password});

    }

    render() {
        return (
            <View>
                <Text style = {{ alignSelf: "center", marginTop: 300, fontSize: 32, fontWeight: '400', color:'rgb(19, 81, 176)' }}>Login</Text>
                <View style = {{ marginLeft: 70, marginRight: 70, marginTop: 50 }}>
                    <TextField 
                        style = {{ textAlign: 'center', alignItems: "center", justifyContent: "center"}}
                        textColor = 'orange'
                        labelPadding = {5}
                        label = ""
                        labelFontSize = {25}
                        multiline = {true}
                        value= {this.state.username}
                        placeholder = {'Email'}
                        tintColor = 'orange'
                        inputContainerStyle
                        onChangeText = {(username) => this.setState({username})}
                        baseColor = 'orange'
                        placeholderTextColor = 'orange'
                        fontWeight = '600'
                    />
                </View>
                <View style = {{marginLeft: 70, marginRight: 70}} >
                    <TextField 
                        style = {{ textAlign: 'center', alignItems: "center", justifyContent: "center"}}
                        textColor = 'orange'
                        labelPadding = {5}
                        label = ""
                        labelFontSize = {25}
                        value= {this.state.password}
                        secureTextEntry = {true}
                        placeholder = {'Password'}
                        tintColor = 'orange'
                        inputContainerStyle
                        autoCapitalize = "characters"
                        onChangeText = {(password) => this.setState({password})}
                        baseColor = 'orange'
                        placeholderTextColor = 'orange'
                    />
                </View>
                <View>
                    <TouchableOpacity onPress = {this.onSubmit.bind(this)}>
                        <Image 
                            source = {require('../assets/images/next.png')}
                            style  = {{ marginTop: 25,width: 35, height: 35, alignSelf: 'center'}}
                            />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default connect(null, { onAuth } )(Login);
