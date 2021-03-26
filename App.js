
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";

import { RestaurantListContextProvider } from './src/context/RestaurantListContext'

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <RestaurantListContextProvider>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen name="Search" component={HomeScreen} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </RestaurantListContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});