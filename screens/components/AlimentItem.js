import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class AlimentItem extends React.Component {
  render (){
    const {aliment, displayDetailForAliment } = this.props
    return(
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => displayDetailForAliment(aliment.code)}
        >
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(aliment.image_url)}}
        />
        <View style={styles.content_container} >
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{aliment.product_name}</Text>
            <Text style={styles.note_text}>{aliment.nutrition_score_fr_100g}</Text>
          </View>
          <View style={styles.etat_container}>
            <Text style={styles.etat_text}>{aliment.etat}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
    main_container: {
      height: 190,
      flexDirection: 'row'
    },
    image: {
      width: 120,
      height: 180,
      margin: 5,
   },
   content_container:{
     flex:1 ,
     margin : 5
   },
   header_container:{
     flex : 3,
     flexDirection: 'row'
   },
   title_text: {
   fontWeight: 'bold',
   fontSize: 20,
   flex: 1,
   flexWrap: 'wrap',
   paddingRight: 5
  },
  note_text:{
    fontWeight: 'bold',
    fontSize: 28,
    color: '#666666'
  },
  etat_container:{
    flex:7
  },
  etat_text:{
    color:'black'
  }
})

export default AlimentItem
