import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { myRides } from '../../common/data/mockData';
import { CheckCircle, XCircle, MapPin } from 'lucide-react-native';

const MyRidesScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>My Rides</Text>
    {myRides.map((ride) => (
      <View key={ride.id} style={styles.card}>
        <Text style={styles.cardTitle}>{ride.name}</Text>
        <View style={styles.row}>
          <MapPin size={14} color="#6b7280" />
          <Text style={styles.text}>{ride.area}</Text>
        </View>
        <Text style={styles.meta}>{ride.time}</Text>
        <View style={styles.row}>
          {ride.status === 'Completed' ? (
            <CheckCircle size={14} color="green" />
          ) : (
            <XCircle size={14} color="orange" />
          )}
          <Text style={styles.meta}>{ride.status}</Text>
        </View>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: 'white', borderRadius: 8, padding: 12, marginBottom: 12, elevation: 1 },
  cardTitle: { fontWeight: 'bold', fontSize: 16 },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  text: { marginLeft: 4, color: '#374151' },
  meta: { fontSize: 12, color: '#6b7280', marginLeft: 4 },
});

export default MyRidesScreen;
