import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Onboarding'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PoolEase</Text>
      <ActivityIndicator size="large" color="#2563eb" style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#2563eb' },
  loader: { marginTop: 20 },
});

export default SplashScreen;