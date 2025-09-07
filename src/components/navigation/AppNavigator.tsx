import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import RideDetailsScreen from '../../screens/RideDetailsScreen';
import { Ride } from '../../types';

export type RootStackParamList = {
  MainTabs: undefined;
  RideDetails: { ride: Ride };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen 
        name="RideDetails" 
        component={RideDetailsScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
