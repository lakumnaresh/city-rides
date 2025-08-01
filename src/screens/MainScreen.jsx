import React from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import BottomTabNavigator from '../components/Navigation/BottomTabNavigator';

const MainScreen = () => {
  return (
      <BottomTabNavigator />
  );
};

export default MainScreen;