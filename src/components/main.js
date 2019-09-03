import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Animated} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {add} from './actions/addNotes';
class Main extends Component {

    constructor(){
        super()
        this.state = {
            button : 0,
            notes  : "",
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0)
        }    
    }

    onButtonPress = () => {
        this.setState({button: this.state.button+1})
        console.log(this.state.button)
    }

    changeState = () => {
        this.setState({button: 0})
    }

    addnotes = () => {

        const button = this.state.button;

        this.props.add({button});

        this.setState({ 
            button: 0,
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0)
        })

        console.log(this.state.notes);
    }

    display = () => {

        let animationStyle = {
            transform: [{translateY: this.state.yPosition}],
            opacity  : this.state.opacity
        }
        if(this.state.button>0){
            Animated.parallel([
                Animated.timing(this.state.yPosition,{
                    toValue: -400,
                    duration: 200
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 200
                })
            ]).start();
        }
        if(this.state.button>0)
            return(
                <Animated.View style = { [styles.viewStyle, animationStyle] } >
                    <TextField 
                        style = {{ textAlign: 'center', alignItems: "center", justifyContent: "center"}}
                        textColor = 'orange'
                        labelPadding = {5}
                        label = ""
                        labelFontSize = {25}
                        multiline = {true}
                        value= {this.state.notes}
                        placeholder = {'Enter Your Notes Here'}
                        tintColor = 'orange'
                        inputContainerStyle
                        autoCapitalize = "characters"
                        onChangeText = {(notes) => this.setState({notes})}
                        baseColor = 'orange'
                        placeholderTextColor = 'orange'
                    />
                    <Text 
                    onPress = {this.addnotes.bind(this)}
                    style = {{alignSelf: 'center', fontWeight: '500', fontSize: 21, marginTop: 15, color: 'rgb(19, 81, 176)'}}>Add</Text>
                </Animated.View>
            )
    }

    render() {
        return(
            <View style = {{marginTop: 700}}>
                <TouchableOpacity 
                    style = {{elevation: 3}}
                    onPress = {this.onButtonPress.bind(this)} >
                    <Image
                        source = {require('../assets/images/plus1.png')}
                        style = {{
                            width: 60,
                            height: 60,
                            alignSelf: 'center'
                        }}
                        />
                </TouchableOpacity>
                {this.display()}
            </View>
        )
    }
}

styles = {
    viewStyle : {
        marginLeft: 80, 
        marginRight: 80
    }
}

export default connect(null, {add})(Main);