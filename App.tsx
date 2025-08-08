/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/auth/OnboardingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => (<SafeAreaProvider>
 <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} options={options} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={options} />
      <Stack.Screen name="Login" component={LoginScreen} options={options} />
      <Stack.Screen name="Main" component={MainScreen} options={options} />
    </Stack.Navigator>
  </NavigationContainer>
</SafeAreaProvider>);

 const options: NativeStackNavigationOptions ={
    headerShown: false,
    animation: 'fade', // or 'slide', 'none'
    // gestureEnabled: true, // enable swipe back gesture
    // gestureDirection: 'horizontal', // or 'vertical'
    // cardStyle: { backgroundColor: '#ffffff' }, // background color for the screen
    // contentStyle: { padding: 20 }, // padding for the screen content
    // headerStyle: { backgroundColor: '#f4511e' }, // background color for the header
    // headerTintColor: '#fff', // color for the header text and icons
    // headerTitleStyle: { fontWeight: 'bold' }, // style for the header title
    // headerBackTitleVisible: false, // hide the back button title
    // headerShadowVisible: false, // hide the header shadow
    // statusBarHidden: false, // hide the status bar
    // statusBarTranslucent: true, // make the status bar translucent
    //statusBarBackgroundColor: '#f4f6f9', // background color for the status bar
    statusBarBackgroundColor: 'transparent', // background color for the status bar
    statusBarTranslucent: true, // make the status bar opaque
    statusBarStyle: 'dark', // or 'dark'
    //statusBarColor: '#1e1e1e',
  }

export default App;
