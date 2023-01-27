
import DinoList from './components/DinoList';
import TameDino from './components/TameDino';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fire from './Fire';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import React from 'react'
import Home from './components/Home';




const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TameDione"
          component={TameDino}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

