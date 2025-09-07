import React from 'react';
import AppNavigator from '../components/navigation/AppNavigator';
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

  return <AppNavigator />;
};

export default MainScreen;