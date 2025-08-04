import React,{useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import MapView from '../components/Map/MapView';
import RideCard from '../components/Cards/RideCard';
import { availableRides } from '../data/mockData';
import { COLORS, SIZES } from '../utils/constants';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

const HomeScreen = () => {
  // const isFocused = useIsFocused();
  //   useEffect(() => {
  //   if (isFocused) {
  //     StatusBar.setTranslucent(true);
  //     StatusBar.setBackgroundColor('transparent');
  //     StatusBar.setBarStyle('light-content'); // or 'light-content'
  //   }
  // }, [isFocused]);

  const handleRidePress = (ride) => {
    // Handle ride selection
    console.log('Selected ride:', ride);
  };

  return (<>
    <MapView />
    <View style={globalStyles.container}>
      {/* Header */}
      {/* <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>RidePool</Text>
        <Text style={globalStyles.headerSubtitle}>Safe & Affordable Rides</Text>
      </View> */}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* <View style={styles.mapSection}>
          <Text style={globalStyles.screenTitle}>Find Your Ride</Text>
          <MapView />
        </View> */}
        
        <View style={styles.ridesSection}>
          <Text style={styles.sectionTitle}>Available Rides</Text>
          {availableRides.map(ride => (
            <RideCard 
              key={ride.id} 
              ride={ride} 
              onPress={() => handleRidePress(ride)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
    </>
);
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: SIZES.padding,
  },
  mapSection: {
    marginBottom: 4,
  },
  ridesSection: {
    marginBottom: SIZES.margin,
  },
  sectionTitle: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.gray[900],
    marginBottom: SIZES.margin,
  },
});

export default HomeScreen;