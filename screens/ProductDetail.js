import React, { Component } from "react";
import { connect } from 'react-redux'
import {getProductFromApiWithCodeBar} from "../Api/Off";
import { BarChart, Grid } from 'react-native-svg-charts'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image
} from "react-native";

class ProductDetail extends Component {
  constructor(props){
    super(props)
    this.state = { product: [], nutriments: [] }
  }

  componentDidMount(){
    const { navigation } = this.props;
    const productId = navigation.getParam('productId', null)
    const productId1 = productId
    const date = new Date();

    getProductFromApiWithCodeBar(productId).then(data => {
      this.setState({ product: data["product"] });
      this.setState({ nutriments: data["product"]["nutriments"]});
      const action = { type: "TOGGLE_FAVORITE", value: {productId1, date}}
      this.props.dispatch(action)
    });
  }

  _toggleFavorite() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.product }
    this.props.dispatch(action)
  }

  render() {
    const fat = this.state.nutriments.fat_100g*1;
    const gluci = this.state.nutriments.sugars_100g*1
    const prot = this.state.nutriments.proteins
    const fibre = this.state.nutriments.fiber

    const data1 = [0,gluci,fat]
      .map((value) => ({ value }))
    const data2 = [prot, fibre ]
        .map((value) => ({ value }))

    const barData = [
        {
            data: data1,
            svg: {
                fill: 'red',
            },
        },
        {
            data: data2,
            svg: {
                fill: 'green',
            },
        },
    ]
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
              <Image style={{flex:1}}
                  source={{uri: this.state.product.image_url}}
              />
        </View>
        <View style={{ flex: 1, backgroundColor: '#2C3239' }}>
          <Text style={styles.name}>{this.state.product.product_name}</Text>
          <Text style={styles.brands}>({this.state.product.brands})</Text>
          <Text style={styles.category}>{this.state.product["categories"]}</Text>
        </View>
        <View style={{ flex: 2}}>
          <ScrollView>
            <Text style={styles.titleText}>Ingrédients:</Text>
            <Text style={styles.ingredients} numberOfLines={6}>{this.state.product["ingredients_text_fr"]}</Text>
            <Text style={styles.titleText}> Repères nutritionnels(100g): </Text>
            <Text style={styles.nutric}> Energie: {this.state.nutriments.energy_value} kcal</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
              <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={styles.nutrir}> Matières grasses: {this.state.nutriments.fat_100g}g</Text>
                <Text style={styles.nutrir}> Glucides: {this.state.nutriments.sugars_100g}g</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={styles.nutriv}> Protéines: {this.state.nutriments.proteins}g</Text>
                <Text style={styles.nutriv}> Fibres: {this.state.nutriments.fiber}g</Text>
              </View>
            </View>
            <Text style={styles.score}>Score : {this.state.product.nutrition_grade_fr}</Text>
            <View style={{flex:1}}>
              <BarChart yAccessor={({ item }) => item.value}
              style={{ height: 200 }}
              data={ barData } svg={{ fill: 'green' }}
              contentInset={{ top: 30, bottom: 30}}>
                <Grid/>
              </BarChart>
            </View>
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
              <Text>Protéines</Text>
              <Text>Glucides</Text>
              <Text>Fibres</Text>
              <Text>Gras</Text>
            </View>
          </ScrollView>
      </View>
</View>
    )
  }
}
const styles = StyleSheet.create({
 titleText: {
   marginTop: 15,
   textAlign: 'center',
   marginBottom: 20,
   fontSize: 20,
   fontWeight: 'bold',
   textDecorationLine: 'underline',

 },
 name:{
   textAlign: 'center',
   paddingTop: 5,
   fontSize: 20,
   color: 'white'
 },
 brands: {
   textAlign: 'center',
   fontSize: 15,
   color: 'white',
   fontStyle: 'normal',
 },
 score: {
   marginTop: 15,
   textAlign: 'center',
   marginBottom: 20,
   fontSize: 20,
   fontWeight: 'bold',
 },
 category: {
   textAlign: 'center',
   fontSize: 13,
   color: 'white',
   fontStyle: 'italic'
 },
 ingredients: {
   fontStyle: 'italic',
   paddingTop: 10,
   marginLeft: 15,
   marginRight: 15,
   color: 'black',
   fontSize: 17,
   textAlign: 'center'
 },
 nutri: {
   fontSize: 15,
   textAlign: 'left',
   fontStyle: 'italic',
 },
 nutric: {
   fontSize: 15,
   textAlign: 'center',
   fontStyle: 'italic',
   marginBottom:15
 },
 nutrir:{
   fontSize: 15,
   textAlign: 'left',
   fontStyle: 'italic',
   color: 'red'
 },
 nutriv: {
   fontSize: 15,
   textAlign: 'right',
   fontStyle: 'italic',
   color: 'green'
 }
});
const mapStateToProps = (state) => {

  return state

}
export default connect(mapStateToProps)(ProductDetail);
