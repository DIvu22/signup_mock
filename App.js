

import React, { Component } from "react";
import {StyleSheet, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Text, H1, Container, Content, Button, Card, CardItem, Body, Form, Item, Label, Input, Icon, Picker} from 'native-base';
import Expo from "expo";

export default class App extends React.Component {

 _handleButtonPress = () => {
var url = "https://app.banner20.hasura-app.io/seller_signup";

var requestOptions = {
   "method": "POST",
   "headers": {
       "Content-Type": "application/json"
   }
};

var body = {
   "provider": "username",
   "data": {
       "first_name": "divya",
       "last_name": "gupta",
       "email": "div123@g.com",
       "phone_number": "987654321",
       "password": "divya12345",
       "passconfirm": "divya12345"
   }
};

requestOptions.body = JSON.stringify(body);

fetch(url, requestOptions)
.then(function(response) {
    return response.json();
})
.then(function(result) {
    console.log(result);
    // To save the auth token received to offline storage
    var authToken = result.auth_token
    AsyncStorage.setItem('HASURA_AUTH_TOKEN', authToken);
})
.catch(function(error) {
    console.log('Request Failed:' + error);
});
}
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    else{
     return  (
        <KeyboardAvoidingView behavior='padding'>
         <Item floatingLabel style={{width:'70%'}}>
                  <Label>First Name</Label>
                  <Input style={{color:'black'}}/>
                </Item>
                 <Item floatingLabel style={{width:'70%'}}>
                  <Label>Last Name</Label>
                  <Input style={{color:'black'}}/>
                </Item>
  <Item floatingLabel style={{width:'70%'}}>
                <Label>E-mail</Label>
                <Input style={{color:'black'}}/>
              </Item>
                 <Item floatingLabel style={{width:'70%'}}>
                  <Label>Mobile number</Label>
                  <Input keyboardType='numeric' style={{color:'black'}}/>
                </Item>
              <Item floatingLabel style={{width:'70%'}}>
                <Label>Password</Label>
                <Input secureTextEntry={true} style={{color:'black'}}/>
              </Item>
             <Item floatingLabel style={{width:'70%'}}>
                  <Label>Confirm password</Label>
                  <Input secureTextEntry={true} style={{color:'black'}}/>
                </Item>
    <Button full primary style={{marginLeft:15, marginRight:15}}  onPress={() => this._handleButtonPress} ><Text>Sign Up</Text></Button>
         </KeyboardAvoidingView>
                 
           
   
           
 );
    }
  }
}

