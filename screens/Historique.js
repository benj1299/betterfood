import React from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import AlimentsHistorique from './components/AlimentsHistorique.js'

class Historique extends React.Component {

  render(){
    return(
      <View style={styles.main_container}>
      <FlatList
        data={this.props.toggleFavorite.favoritesAliments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =><TouchableOpacity onPress={() => {this.props.navigation.navigate('ProductDetail', {productId: item.productId1})}}><AlimentsHistorique aliment={item}/></TouchableOpacity>}
      />
      </View>
      )
  }
}
const styles = StyleSheet.create({
  main_container : {
    flex: 1,
    marginTop: 30
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    paddingLeft: 5
  }
})

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(Historique)
