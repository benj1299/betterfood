import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import {logUser} from '../Api/User'

class Connexion extends React.Component {
  constructor(props) {
     super(props)

     this.state = {
       connexEmail: "",
       connexPassword:"",
       data: [],
       alert: false
     }
 }

 _toggleConnexion(){
   const action ={type:'TOGGLE_CONNEXION', value: this.state}
   this.props.dispatch(action)
 }

 _connexEmailInputChanged(text) {
   this.setState({ connexEmail: text.toLowerCase() })
}

_connexPasswordInputChanged(text) {
   this.setState({ connexPassword: text })
}

  _signInAsync = async () => {
    logUser(this.state.connexEmail, this.state.connexPassword).then(data => {
        this.state.data = data;
    });

    if(this.state.data && this.state.data.length > 0){
      const data = this.state.data;

      await AsyncStorage.setItem('userFirstname', data[0]["firstname"]);
      await AsyncStorage.setItem('userLastname', data[0]["lastname"]);
      await AsyncStorage.setItem('userEmail', data[0]["email"]);
      await AsyncStorage.setItem('userToken', 'abc');

      this.props.navigation.navigate("App");
    } 
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput}
        placeholder='E-mail'
        onChangeText={(text) => this._connexEmailInputChanged(text)}  />
        <TextInput
          secureTextEntry={true}
          style={styles.textinput}
          placeholder ='Mot de passe'
          onChangeText={(text) => this._connexPasswordInputChanged(text)}
        />
        <Button style={styles.buttonText} onPress={this._signInAsync} title="Connexion" />
        <View style={styles.compteText}>
          <Text> Vous n'avez pas de compte ? </Text>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate("Inscription") } >
             <Text style={styles.inscriptionText}>Inscription</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  compteText : {
    flexGrow:1,
    marginTop:30,
    flexDirection: 'row'
  },
  inscriptionText:{
    fontSize:16,
    color:'blue'
  },
  container: {
    flex:1,
    marginTop: 10,
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
    //marginTop: 30,
    backgroundColor:'#3c71cb',
    width:300,
    marginVertical:40,
    paddingVertical:16,
    borderRadius:20,
    justifyContent: 'center',
  },
  buttonText:{
    textAlign:'center',
    fontSize:16,
    color: '#ffffff'
  }
})

export default Connexion
