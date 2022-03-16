import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home'
import TaskDetail from './pages/TaskDetail'

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="podotodo" component={Home} />
        <Stack.Screen name="TaskDetail" component={TaskDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}