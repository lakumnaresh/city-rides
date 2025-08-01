import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPin, Star, IndianRupee, Clock } from 'lucide-react-native';

const RideCard = ({ ride }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{ride.name}</Text>
    <View style={styles.row}><MapPin size={14} color="#6b7280" /><Text style={styles.text}>{ride.area}</Text></View>
    <View style={styles.row}><Clock size={14} color="#6b7280" /><Text style={styles.text}>ETA: {ride.eta}</Text></View>
    <View style={styles.row}><IndianRupee size={14} color="#6b7280" /><Text style={styles.text}>{ride.price}</Text></View>
    <View style={styles.row}><Star size={14} color="#facc15" /><Text style={styles.text}>{ride.rating}</Text></View>
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: 'white', borderRadius: 8, padding: 12, marginBottom: 12, elevation: 1 },
  name: { fontWeight: 'bold', fontSize: 16 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  text: { marginLeft: 4, color: '#374151' },
});

export default RideCard;