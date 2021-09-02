import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/customButton';
import CustomInput from './components/customInput'
import LoginScreen from './screens/Login';
export default class App extends Component {
  render(){
    return <LoginScreen/>
 }
} 