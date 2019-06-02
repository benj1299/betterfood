import React from 'react';
import {StyleSheet, Image} from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Recipe from '../screens/Recipe'
import TodoList from '../screens/TodoList'
import ScanBarCode from '../screens/components/ScanBarCode'
import Connexion from '../screens/Connexion'
import Inscription from '../screens/Inscription'
import ProductDetail from '../screens/ProductDetail'
import Historique from '../screens/Historique'
import Logout from '../screens/Logout'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const StackNavigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Accueil'
    }
  },
  Recipe: {
    screen: Recipe,
    navigationOptions: {
      title: 'Recettes'
    }
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      title: 'Détails du produit'
    }
  },
  Inscription : {
    screen: Inscription,
    navigationOptions: {
      title: 'Inscription'
    }
  }
})

const ConnexionStackNavigator = createStackNavigator({
  Connexion: {
    screen:Connexion,
    navigationOptions: {
      title: 'Connexion'
    }
  },
  Inscription: {
    screen: Inscription,
    navigationOptions: {
      title: 'Inscription'
    }
  }
})

const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: StackNavigation,
    navigationOptions: {
        tabBarIcon: () => {
          return <Image
          source={require('../assets/Home.png')}
          style={styles.icon}/>
        }
      }
    },
  ScanBarCode:  {
    screen: ScanBarCode,
    navigationOptions: {
        tabBarIcon: () => {
          return <Image
          source={require('../assets/scan.png')}
          style={styles.icon}/>
        }
      }
    },
  TodoList: {
    screen: TodoList,
    navigationOptions: {
        tabBarIcon: () => {
          return <Image
          source={require('../assets/Todo.png')}
          style={styles.icon}/>
        }
      }
    },
  Historique : {
    screen: Historique,
    navigationOptions: {
      title:'Historique',
        tabBarIcon: () => {
          return <Image
          source={require('../assets/history.png')}
          style={styles.icon}/>
        }
      }
    },
  Logout: {
    screen: Logout,
    navigationOptions: {
        title: "Déconnexion",
        tabBarIcon: () => {
          return <Image
          source={require('../assets/logout.png')}
          style={styles.icon}/>
        }
      }
    }
})

const SwitchNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigation,
    Auth: ConnexionStackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    }
})

export default createAppContainer(SwitchNavigation)
