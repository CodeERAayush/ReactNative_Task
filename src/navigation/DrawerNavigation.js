import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import vector icon library
import HomeScreen from '../screens/Home';
import AddProductScreen from '../screens/AddProduct';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {

    function CustomDrawerContent(props) {
        return (
          <DrawerContentScrollView {...props}>
            {/* Close button */}
            <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
              <Icon name="close" size={24} />
            </TouchableOpacity>
      
            {/* Drawer items */}
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      }

  return (
      <Drawer.Navigator 
       drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="AddProduct" 
          component={AddProductScreen} 
          options={{
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <Icon name="add-circle-outline" color={color} size={size} />
            ),
          }} 
        />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    closeButton: {
      marginLeft: 16,
      marginBottom: 16,
    },
  });