import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/component/Home'
import TaskDetail from './src/component/TaskDetail'

import {Provider} from 'react-redux'
import {store} from './src/component/store'

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="todos" component={Home} />
          <Stack.Screen name="TaskDetail" component={TaskDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}