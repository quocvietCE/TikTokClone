import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from '../screens/HomeScreen';

import DiscoverScreen from '../screens/DiscoverScreen';
import PlusScreen from '../screens/PlusScreen';
import InboxScreen from '../screens/InboxScreen';
import MeScreen from '../screens/MeScreen';

import PlusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
      style: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        elevation: 2,
      },
      // showLabel: false,
      tabStyle: {
        backgroundColor: '#000',
      },
    }}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Entypo name="home" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="DiscoveryScreen"
      component={DiscoverScreen}
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({color, size}) => (
          <AntDesign name="search1" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Upload"
      component={PlusScreen}
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({color, size}) => (
          <Image
            style={{height: 35, marginTop: 10}}
            resizeMode="contain"
            source={PlusIcon}
          />
        ),
      }}
    />

    <Tab.Screen
      name="InboxScreen"
      component={InboxScreen}
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="message-minus-outline"
            color={color}
            size={25}
          />
        ),
      }}
    />

    <Tab.Screen
      name="MeScreen"
      component={MeScreen}
      options={{
        tabBarLabel: 'Me',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person-outline" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
