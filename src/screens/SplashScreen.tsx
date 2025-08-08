import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/globalStyles';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Onboarding'), 3000);
  }, []);

  return (<SafeAreaView style={globalStyles.rootView}>
    <View style={styles.container}>
      <Text style={styles.logo}>City Rides</Text>
      <ActivityIndicator size="large" color="#2c2d31ff" style={styles.loader} />
    </View>
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#2c2d31ff' },
  loader: { marginTop: 20 },
});

export default SplashScreen;