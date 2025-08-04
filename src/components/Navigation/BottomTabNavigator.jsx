import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from '../../screens/HomeScreen';
import MyRidesScreen from '../../screens/MyRidesScreen';
import UpdatesScreen from '../../screens/UpdatesScreen';
import MoreScreen from '../../screens/MoreScreen';
import { COLORS, SIZES } from '../../utils/constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size=24 }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'map-pin';
            } else if (route.name === 'My Rides') {
              iconName = 'truck';
            } else if (route.name === 'Updates') {
              iconName = 'bell';
            } else if (route.name === 'More') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={22} color={color} />;
          },
          tabBarActiveTintColor: COLORS.black,
          tabBarInactiveTintColor: COLORS.gray[400],
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopColor: COLORS.gray[300],
            borderTopWidth: 1,
            paddingBottom: 0,
            paddingTop: 0,
            height: 56,
          },
          tabBarLabelStyle: {
            fontSize: 11.5,
            fontWeight: '500',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Rides" component={MyRidesScreen} />
        <Tab.Screen name="Updates" component={UpdatesScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;