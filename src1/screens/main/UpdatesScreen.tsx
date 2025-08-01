import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { newsUpdates } from '../../common/data/mockData';
import { Calendar } from 'lucide-react-native';

const UpdatesScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Updates</Text>
    {newsUpdates.map((update) => (
      <View key={update.id} style={styles.card}>
        <Text style={styles.cardTitle}>{update.title}</Text>
        <View style={styles.row}>
          <Calendar size={14} color="#6b7280" />
          <Text style={styles.date}>{update.date}</Text>
        </View>
        <Text style={styles.description}>{update.description}</Text>
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
  date: { marginLeft: 4, color: '#374151', fontSize: 12 },
  description: { color: '#4b5563', fontSize: 14 },
});

export default UpdatesScreen;
