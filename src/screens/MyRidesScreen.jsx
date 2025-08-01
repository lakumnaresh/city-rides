import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MyRideCard from '../components/Cards/MyRideCard';
import { myRides } from '../data/mockData';
import { COLORS, SIZES } from '../utils/constants';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyRidesScreen = () => {
  return (<SafeAreaView style={globalStyles.rootView}>
    <View style={globalStyles.container}>
      {/* Header */}
      {/* <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>RidePool</Text>
        <Text style={globalStyles.headerSubtitle}>Safe & Affordable Rides</Text>
      </View> */}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={globalStyles.screenTitle}>My Rides</Text>
        {myRides.map(ride => (
          <MyRideCard key={ride.id} ride={ride} />
        ))}
      </ScrollView>
    </View>
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: SIZES.padding,
  },
});

export default MyRidesScreen;