import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Animated, ActivityIndicator} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {connect} from 'react-redux';
import {add, displayNotes} from './actions/addNotes';
import _ from 'lodash';
import { ScrollView } from 'react-native-gesture-handler';

class Main extends Component {

    componentDidMount() {
        {this.props.displayNotes();}
        console.log(this.props.names);
    }

    constructor(){
        super()
        this.state = {
            button : 0,
            notes  : "",
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0),
            display: 1
        }    
    }

    onButtonPress = () => {
        this.setState({button: this.state.button+1})
        this.setState({display: 0})
        console.log(this.state.button)
    }

    changeState = () => {
        this.setState({button: 0})
    }

    addnotes = () => {

        const notes = this.state.notes;

        this.props.add({notes});

        this.setState({ 
            button: 0,
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0),
            notes: "",
            display: 1
        })
        console.log(this.state.notes);
    }
    notes = () => {
        if(this.props.notes && this.state.display == 1){
            return(
            <View style={{marginTop: 70}}>
                <View style = {{
                    borderBottomWidth: 1,
                    marginBottom: 20,
                    marginLeft: 15,
                    marginRight: 15,
                    borderBottomColor: 'grey'}} >
                    <Text 
                    style = {{fontSize: 24, fontWeight: '700', marginLeft: 15, marginBottom: 8, color: 'orange' }} >
                        Hey {this.props.names} !</Text>
                </View>
                { this.props.notes.map((item, key)=>(
                    <View>
                        <Text key={key} style={styles.TextStyle} > { item } </Text>
                    </View>)
                )}
            </View>
        )}
        else {
            return(
            <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 400}}>
                <ActivityIndicator size="large" color="rgb(19, 81, 176)" />
            </View>
        )}
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
                <Animated.View style = { [{marginTop: 500, marginLeft: 80, marginRight: 80}, animationStyle] } >
                    <TextField 
                        style = {{ }}
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
                        textAlign = 'center'
                    />
                    <Text 
                    onPress = {this.addnotes.bind(this)}
                    style = {{fontWeight: '500', marginLeft: 80, marginRight: 80, fontSize: 21, marginTop: 15, color: 'rgb(19, 81, 176)'}}>Add</Text>
                </Animated.View>
            )
    }

    render() {
        return(
            <View style = {{flex: 1}}>
                <ScrollView>
                    {this.notes()}    
                </ScrollView>     
                {this.display()}       
                <View style = {{marginTop: 700, position: 'absolute', alignSelf: 'center'}}>
                        <TouchableOpacity 
                            style = {{elevation: 3}}
                            onPress = {this.onButtonPress.bind(this)} >
                            <Image
                                source = {require('../assets/images/plus1.png')}
                                style = {{
                                    width: 60,
                                    height: 60,
                                }}
                                />
                        </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {

    console.log(state.Main.data)
    const notes = state.Main.data;

    return { notes }

}

styles = {
    TextStyle:{
        fontSize : 18,
        borderWidth: 1, 
        width: 320,
        height: 120,
        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        borderColor: 'orange',
        backgroundColor: 'orange',
        borderRadius: 7,
        elevation: 5,
        color: 'white',
        fontWeight: '600',
        overflow: 'hidden',
      }
}

export default connect(mapStateToProps, {add, displayNotes})(Main);