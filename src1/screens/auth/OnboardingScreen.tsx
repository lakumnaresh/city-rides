import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    {/* <Image source={require('../assets/onboarding.png')} style={styles.image} /> */}
     <Image source={{uri:''}} style={styles.image} />
    <Text style={styles.title}>Welcome to PoolEase</Text>
    <Text style={styles.subtitle}>Your easy and secure way to share rides</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  image: { width: 300, height: 300, marginBottom: 24, resizeMode: 'contain' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: '#2563eb', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});

export default OnboardingScreen;