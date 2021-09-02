import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, SafeAreaView, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';  
import firebase from 'firebase';
import db from "../config";
import SignUpModal from '../components/Login/SignUpModal';

export default class LoginScreen extends Component {
  constructor(){
      super();
      this.state = {
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          address: "",
          contact: "",
          confirmPassword: "",
          isModalVisible: false
      };
  } 
  
  handleLogin = (email,password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(response => {
          Alert.alert("Successfully Login");
          console.log("Successfully Login");
      })
      .catch(error => {
          Alert.alert(error.message);
      });
      console.log("login test")
};

  // handleSignUp = (email,password) => {
  //   console.log("sign up test")
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //   .then(()=>{
  //     db.collection('users').add({
  //       first_name:this.state.firstName,
  //       last_name:this.state.lastName,
  //       contact:this.state.contact,
  //       email_id:this.state.email,
  //       address:this.state.address
  //     });

  //   })

  // }

  handleSignUp = () => {
    this.setState({isModalVisible: true});
    console.log("sign up test")
    console.log("handlesignup" + this.state.isModalVisible)
  };


  handleSubmit = () => {
    var {
      firstName,
      lastName,
      contact,
      address,
      email,
      password,
      confirmPassword
    } = this.state;

    if (password !== confirmPassword){
      Alert.alert("Password doesn't match \nCheck your password.") 
      console.log("password doesn't match")

    } else{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(()=>{
        db.collection('users').add({
          first_name:this.state.firstName,
          last_name:this.state.lastName,
          contact:this.state.contact,
          email_id:this.state.email,
          address:this.state.address
        });
        console.log("User Added Successfully")
        Alert.alert("User Added Successfully", "",[
          {
            text:"OK",
            onPress: () => this.setState({isModalVisible: false})
          }
        ]);
      })
      .catch(error => {
        Alert.alert(error.message);
      });
      console.log("submit")
    }
  };

    render(){
        var {email,password} = this.state;
    return (

<View style={styles.container}>
        <SafeAreaView />
        <View style={styles.upperContainer}>
          <Image source={require("../assets/santa.png")} style={styles.image} />
        </View>
        <View style={styles.middleContainer}>
          <CustomInput
            placeholder={"abc@example.com"}
            keyboardType={"email-address"}
            onChangeText={text => {
              this.setState({
                email: text
              });
            }}
          />
          <CustomInput
            secureTextEntry={true}
            placeholder={"Enter Password"}
            onChangeText={text => {
              this.setState({
                password: text
              });
            }}
          />
          <CustomButton
            title={"Login"}
            onPress={() => this.handleLogin(email, password)}
          />
          <CustomButton
            title={"SignUp"}
           // onPress={() => this.handleSignUp(email,password)}
           onPress={() => this.handleSignUp()}
          />
        </View>
        <View style={styles.lowerContainer}>
          <Image
            source={require("../assets/book.png")}
            style={styles.bookImage}
          />
        </View>
        <SignUpModal
          setFirstName = {text => this.setState({firstName: text})}
          setLastName = {text => this.setState({lastName: text})}
          setContact = {text => this.setState({contact: text})}
          setAddress = {text => this.setState({address: text})}
          setEmail = {text => this.setState({email: text})}
          setPassword = {text => this.setState({password: text})}
          setConfirmPassword = {text => this.setState({confirmPassword: text})}
          onSubmit = {() => this.handleSubmit()}
          onCancle = {() => {
            console.log("close form");
            this.setState({isModalVisible: false});
            console.log("cancel" + this.state.isModalVisible)
          }}
         visible = {this.state.isModalVisible}
         
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8"
  },
  upperContainer: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain"
  },
  middleContainer: {
    flex: 0.42,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  lowerContainer: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center"
  },
  bookImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  modalContainer:{
    flex:1,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#FFFF",
    marginTop:80
},
KeyboardAvoidingView:{
  flex:1,
  justifyContent: "center",
  alignItems:"center"
},
modalTitle:{
  justifyContent: "center",
  alignSelf: "center",
  fontSize: 30,
  fontWeight: "500",
  color: "#6fc0b8",
  marginTop: 30
},
formTextInput:{
  width: "75%",
  height: 55,
  marginTop:20,
  borderColor: "#6FC0B8",
  borderWidth: 1.5,
  fontSize:20,
  fontWeight: "400"
}
});