import React,{useEffect} from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import BottomTabNavigator from '../components/Navigation/BottomTabNavigator';
import { useIsFocused } from '@react-navigation/native';

const MainScreen = () => {
  //  const isFocused = useIsFocused();
  //     useEffect(() => {
  //     if (isFocused) {
  //       StatusBar.setTranslucent(true);
  //       StatusBar.setBackgroundColor('transparent');
  //       StatusBar.setBarStyle('dark-content'); // or 'light-content'
  //     }
  //   }, [isFocused]);

  return (
      <BottomTabNavigator />);
};

export default MainScreen;