import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { store } from './src/store';
import StackNavigator from './src/navigation/Stacknavigator';
import { StatusBar, StyleSheet } from 'react-native';
import { Colors } from './src/constants/color';
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
      backgroundColor={Colors.white}
      barStyle={'dark-content'}
      />
      <NavigationContainer>
        <StackNavigator/>
        </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})