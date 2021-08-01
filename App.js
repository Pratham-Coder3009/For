import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 
import WelcomeScreen from './Screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';


export default class App extends React.Component {
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

const AppNavigator = createSwitchNavigator({
  WelcomeScreen : WelcomeScreen,
  Screen1 : Screen1,
  Screen2 : Screen2,
  Screen3 : Screen3
});

const AppContainer = createAppContainer(AppNavigator);