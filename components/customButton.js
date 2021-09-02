import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomButton = props => (
    <TouchableOpacity 
    style = {[styles.button, props.style]}
    onPress = {props.onPress}
    >
        <Text style = {[styles.buttonText, props.titlestyle]}>{props.title}</Text>
    </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
    button : {
        width: 100,
        height: 60,
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width:0,
            height: 8
        },
        marginTop: 10
    }
})