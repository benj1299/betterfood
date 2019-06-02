import React, { Component } from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    FlatList,
    ScrollView
} from "react-native";

class Recipe extends Component {
      render() {
        const { navigation } = this.props;
        const recipe = navigation.getParam('recipe', null)
        return (
          <View style={styles.contentContainer}>
              <Image style={{ flex: 1 }} source={recipe.image ? { uri: recipe.image } : require('../assets/LogoConnexion.png')} />
              <View style={{flex: 0.7, alignItems: 'center', backgroundColor: '#2C3239'}}>
                <Text style={[styles.titleText, styles.whiteColor]}>{recipe.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.header_description}>
                    <Text style={styles.whiteColor}>Budget : {recipe.budget}</Text>
                    <Text style={styles.whiteColor}>Temps : {recipe.total_time}</Text>
                  </View>
                  <View style={styles.header_description}>
                    <Text style={styles.whiteColor}>  Difficulté : {recipe.difficulty}</Text>
                    <Text style={styles.whiteColor}>Pour {recipe.people_quantity} personnes</Text>
                  </View>
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
              <ScrollView>
                <Text style={styles.titleText}>Ingrédients</Text>
                <FlatList
                  data={recipe.ingredients}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => <Text style={styles.food}>{item}</Text>
                  }
                />
                <Text style={styles.titleText}>Étapes</Text>
                <View style={styles.containerSteps}>
                  <FlatList
                    data={recipe.steps}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <Text>{item}</Text>
                    }
                  />
                </View>
                </ScrollView>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    containerSteps: {
      marginLeft: 10,
      marginRight: 10
    },
    header_description: {
      flexDirection: 'column',
      justifyContent:'space-between'
    },
    whiteColor: {
      color: 'white'
    },
    food: {
      textAlign: 'center'
    },
    titleText: {
      marginTop: 15,
      textAlign: 'center',
      marginBottom: 20,
      fontSize: 20,
      fontWeight: 'bold'
    }
});

export default Recipe;
