import React, { Component } from "react";
import { connect } from 'react-redux'
import moment from "moment";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    FlatList
} from "react-native";

import PlatItem from './components/PlatItem'
import { getRecipeFromApiWithId } from './../Api/Recipe'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = { recipe: [], periode: 0 }
      }

    _calculateNumberAliment(periode){   
        now = moment(new Date());
        i = 0;
        for(j = 0; j < this.props.toggleFavorite.favoritesAliments.length; j++) {
            date = new Date(this.props.toggleFavorite.favoritesAliments[j].date);
            switch (periode) {
                case 1:
                    if(moment(now).subtract(1, 'days') <= date){
                        i = i+1;
                    }
                    break;
                case 2:
                    if(moment(now).subtract(1, 'weeks') <= date){
                        i = i+1;
                    }
                    break;
                case 3:
                    if(moment(now).subtract(1, 'months') <= date){
                        i = i+1;
                    }
                    break;
            default:
                return i;
            }    
        }    
        return i;    
    }
    
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
        getRecipeFromApiWithId().then(data => {
            this.setState({ recipe: data });
        });
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontStyle: 'italic', fontWeight: '700', paddingHorizontal: 20, textAlign: 'center' }}>
                                Les plats du jour
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <FlatList data={this.state.recipe}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={ ({item}) =>
                                <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Recipe', {recipe: item})}>
                                    <PlatItem plat={item} />
                                </TouchableOpacity>
                                }
                                horizontal={true}
                                  />
                            </View>
                        </View>
                    </ScrollView>
                        <View>
                            <Text style={{textAlign: 'center'}}>Vous avez scanné {this._calculateNumberAliment(this.state.periode)} aliments</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={() => this.setState({periode : 1})}>
                                <Text>Jour</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({periode : 2})}>
                                <Text>Semaine</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({periode : 3})}>
                                <Text>Mois</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Home);
