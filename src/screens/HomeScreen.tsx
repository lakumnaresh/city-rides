import React, { useCallback, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MapView from '../components/map/MapView';
import RideCard from '../components/cards/RideCard';
import { availableRides } from '../data/mockData';
import { COLORS, SIZES } from '../utils/constants';
import { globalStyles } from '../styles/globalStyles';
import { Ride } from '../types';

type RootStackParamList = {
  Home: undefined;
  RideDetails: { ride: Ride };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: NavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [selectedId, setSelectedId] = useState(0);

  const handleRidePress = (ride: Ride) => {
    setSelectedId(ride.id);
    // navigation.navigate('RideDetails', { ride });
  };

 const renderItem = useCallback(({item}: {item: Ride}) => {
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
          showsVerticalScrollIndicator={false}
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