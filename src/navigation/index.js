import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeBottomTabNavigator from './homeBottomTabNavigator';

const RootStack = createStackNavigator();

const RootRouter = () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="ChatRoom" component={HomeBottomTabNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);
export default RootRouter;
