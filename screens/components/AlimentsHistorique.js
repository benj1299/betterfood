import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {getProductFromApiWithCodeBar} from "../../Api/Off";
import moment from "moment";

class AlimentsHistorique extends React.Component {
  constructor(props){
    super(props)
    this.state = { product: [] }
  }

  _dateFrance(date){
    now = new Date(date);
    return moment(now).format("DD/MM/YYYY");
  }

  render (){
    getProductFromApiWithCodeBar(this.props.aliment.productId1).then(data => {
      this.setState({product: data["product"] });
    });

    return (
          <View style={styles.main_container}>
            <Image
              style={styles.image}
              source={{uri: this.state.product.image_url}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{this.state.product.product_name}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text}>{this.state.product.brands}</Text>
                <Text> le {this._dateFrance(this.props.aliment.date)} </Text>
              </View>
              <View style={styles.date_container}>
               <Text style={styles.date_text}>Qualité nutritionnelle : {this.state.product.nutrition_grade_fr}</Text>
              </View>
            </View>
        </View>
        )
      }
    }

    const styles = StyleSheet.create({
      main_container: {
        height: 120,
        flexDirection: 'row',
        marginTop: 10
      },
      image: {
        width: 120,
        height: 85,
        margin: 5,
      },
      content_container: {
        flex: 1,
        margin: 5
      },
      header_container: {
        flex: 3,
        flexDirection: 'row'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        fontStyle: 'italic'
      },
      vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
      },
      description_container: {
        flex: 4
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flex: 1
      },
      date_text: {
        flex:1,
        textAlign: 'right',
        fontSize: 14
      }
    })

export default AlimentsHistorique
