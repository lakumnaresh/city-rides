import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import MyRidesScreen from './MyRidesScreen';
import UpdatesScreen from './UpdatesScreen';
import MoreScreen from './MoreScreen';
import { Home, Calendar, Bell, User } from 'lucide-react-native';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const MainScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let Icon;
        if (route.name === 'Home') Icon = Home;
        else if (route.name === 'My Rides') Icon = Calendar;
        else if (route.name === 'Updates') Icon = Bell;
        else Icon = User;
        return <Icon color={color} size={size} />;
      },
      tabBarActiveTintColor: '#2563eb',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="My Rides" component={MyRidesScreen} />
    <Tab.Screen name="Updates" component={UpdatesScreen} />
    <Tab.Screen name="More" component={MoreScreen} />
  </Tab.Navigator>
);

export default MainScreen;