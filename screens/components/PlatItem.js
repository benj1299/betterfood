import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class PlatItem extends Component {
    render() {
      const recipe = this.props.plat
        return (
          <View style={styles.itemContainer}>
            <View style={{flex: 2}}>
                <Image source={ recipe.image ? { uri: recipe.image } : require('../../assets/LogoConnexion.png') } style={styles.imageItem} />
            </View>
            <View style={styles.textItem}>
                <Text>{recipe.name}</Text>
            </View>
          </View>
        );
    }
}
export default PlatItem;

const styles = StyleSheet.create({
    itemContainer: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd'
    },
    imageItem: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
    },
    textItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
});
