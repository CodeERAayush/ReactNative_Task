import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';
import AddProductScreen from '../screens/AddProduct';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
        <Stack.Navigator
        screenOptions={{headerShown:false}}
        initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="AddProduct" component={AddProductScreen} options={{ title: 'Add Product' }} />
        </Stack.Navigator>
  );
};

export default StackNavigator