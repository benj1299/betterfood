import React from 'react'
import { View, AsyncStorage, Alert, Button} from 'react-native'

class Logout extends React.Component {
  _logoutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate("Auth");
  }

 _alertLogout = () => {
   Alert.alert(
     'Deconnexion',
     'Êtes-vous sur de vouloir vous déconnecter ?',
     [
       {text: 'Se déconnecter', onPress: this._logoutAsync },
       {text: 'Annuler', onPress: () => this.props.navigation.goBack()},
     ],
     {cancelable: false},
   );
 }

  render() {
    return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center", borderRadius:10}}>
          <Button title="Se deconnecter" onPress={this._alertLogout}/>
        </View>
    );
  }
}



export default Logout
