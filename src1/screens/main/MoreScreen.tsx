import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { menuItems } from '../../common/data/mockData';

const MoreScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Settings</Text>
    <FlatList
      data={menuItems}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <item.icon size={20} color="#2563eb" />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f9fafb' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  item: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderColor: '#e5e7eb' },
  label: { marginLeft: 12, fontSize: 16, color: '#374151' },
});

export default MoreScreen;