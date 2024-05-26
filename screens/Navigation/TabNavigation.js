import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Tab/HomeScreen';
import Chat from './Tab/Chat';
import Notification from './Tab/Notification';
import Profile from './Tab/Profile';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'notification') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00BFA6',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="chat" component={Chat} />
        <Tab.Screen name="notification" component={Notification} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
  );
}

export default TabNavigation;
