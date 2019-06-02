import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native'
import {checkUser, createUser} from '../Api/User.js'

class Inscription extends Component {

      constructor(props) {
         super(props)
         this.state = {
          data: [],
          lastname: "",
          firstname: "",
          email: "",
          password: "",
          alreadyUserExist: "no"
         }
      }

      _NomTextInputChanged(text) {
        this.state.lastname = text.toLowerCase()
      }

      _PrenomTextInputChanged(text) {
         this.state.firstname= text.toLowerCase()
      }

      _EmailTextInputChanged(text) {
        this.state.email = text.toLowerCase()
      }

      _PasswordTextInputChanged(text) {
        this.state.password = text
      }

      _handleCreateUser = async () => {
        if(this.state.firstname && this.state.lastname && this.state.email && this.state.password)
        {
          checkUser(this.state.email).then(data => {
            this.setState({alreadyUserExist: data})
          });
          if(this.state.alreadyUserExist['state'] == "ok"){
            Alert.alert(
              'Email déjà utilisé',
              'Veuillez changer d\'email',
              [
                {text: 'OK', onPress: () => {}},
              ],
              {cancelable: false},
            );
          }
          createUser(this.state.lastname, this.state.firstname, this.state.email, this.state.password).then(data => {
            this.setState({data: data});
          });
        } else {
          console.log("renvoyer une alerte comme quoi une erreur est survenue");
        }
        if(this.state.data['state'] == 'ok'){
          this.props.navigation.goBack();
        }
      }
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.titre}>Créer un compte</Text>
        <View>
          <TextInput style={styles.textinput} placeholder='nom'
            onChangeText={(text) => this._NomTextInputChanged(text)} />

          <TextInput style={styles.textinput} placeholder='prenom'
            onChangeText={(text) => this._PrenomTextInputChanged(text)} />

          <TextInput style={styles.textinput} placeholder='email'
            onChangeText={(text) => this._EmailTextInputChanged(text)}
            keyboardType="email-address" />

          <TextInput style={styles.textinput}  placeholder ='mot de passe'
            onChangeText={(text) => this._PasswordTextInputChanged(text)}
            secureTextEntry={true}
          />
          <Button style={styles.buttonText} onPress={this._handleCreateUser} title="Créer mon compte" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center'
  },
  titre:{
    fontSize:30,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textinput: {
    marginTop: 30,
    marginLeft: 5,
    borderRadius:10,
    marginRight: 5,
    width:300,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  button :{
    backgroundColor:'#3c71cb',
    width:300,
    marginVertical:40,
    paddingVertical:16,
    borderRadius:20,
    justifyContent: 'center',
  },
  buttonText:{
    textAlign:'center',
    fontSize:16
  }
})

export default Inscription
