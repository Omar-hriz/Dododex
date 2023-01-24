import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DinoList from './components/DinoList';
import Header from './components/Header';
import TameDino from './components/TameDino';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={DinoList}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name="TameDione"
          component={TameDino}
         options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

