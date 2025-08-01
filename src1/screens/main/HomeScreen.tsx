import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import RideCard from '../../common/components/RideCard';
import { availableRides } from '../../common/data/mockData';
import { MapPin } from 'lucide-react-native';

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Find Your Ride</Text>
    <MapView
      style={styles.map}
      initialRegion={{ latitude: 17.4375, longitude: 78.4483, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
      <Marker coordinate={{ latitude: 17.4375, longitude: 78.4483 }}><MapPin color="green" size={20} /></Marker>
      <Marker coordinate={{ latitude: 17.45, longitude: 78.48 }}><MapPin color="red" size={20} /></Marker>
      <Polyline coordinates={[{ latitude: 17.4375, longitude: 78.4483 }, { latitude: 17.45, longitude: 78.48 }]} strokeColor="black" strokeWidth={2} />
    </MapView>
    <Text style={styles.subtitle}>Available Rides</Text>
    {availableRides.map((ride) => <RideCard key={ride.id} ride={ride} />)}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  map: { height: 200, borderRadius: 8 },
  subtitle: { fontSize: 18, fontWeight: '600', marginTop: 20, marginBottom: 8 },
});

export default HomeScreen;
