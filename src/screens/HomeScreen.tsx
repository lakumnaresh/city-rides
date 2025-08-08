import React,{useCallback, useEffect, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import MapView from '../components/map/MapView';
import RideCard from '../components/cards/RideCard';
import { availableRides } from '../data/mockData';
import { COLORS, SIZES } from '../utils/constants';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import {Ride} from '../types';

const HomeScreen = () => {
  const [selectedId, setSelectedId] = useState(0);

  const handleRidePress = (ride: Ride) => {
    // Handle ride selection
    console.log('Selected ride:', ride);
    setSelectedId(ride.id)
  };

 const renderItem = useCallback(({item}) => {
    const borderColor = item.id === selectedId ? COLORS.gray[600] : COLORS.white;
    return (
      <RideCard 
        key={item.id} 
        ride={item}
        borderColor={borderColor}
        onPress={() => handleRidePress(item)}
      />
    );
  }, [selectedId]);

  return (<>
    <MapView />
    <View style={[globalStyles.container,styles.content]}>
        <View style={styles.ridesSection}>
          <Text style={styles.sectionTitle}>Available Rides</Text>
          {availableRides ? (<FlatList
          data={availableRides}
          renderItem={renderItem}
           />) : null}
        </View>
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