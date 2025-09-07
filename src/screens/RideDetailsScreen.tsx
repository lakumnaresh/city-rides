import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, SIZES } from '../utils/constants';
import { globalStyles } from '../styles/globalStyles';
import { Ride } from '../types';

interface RideDetailsScreenProps {
  route: {
    params: {
      ride: Ride;
    };
  };
  navigation: any;
}

const RideDetailsScreen = ({ route, navigation }: RideDetailsScreenProps) => {
  const { ride } = route.params;

  const handleRequestRide = () => {
    // Implement ride request logic here
    // For now, just show an alert or navigate back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color={COLORS.gray[900]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ride Details</Text>
      </View>

      <View style={styles.content}>
        <View style={[styles.card, styles.driverCard]}>
          <View style={[globalStyles.row, { alignItems: 'center' }]}>
            <View style={[styles.iconContainer, { backgroundColor: COLORS.primary + '20' }]}>
              <Icon 
                name={ride.type === 'car' ? 'truck' : 'smartphone'} 
                size={24} 
                color={COLORS.primary} 
              />
            </View>
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>{ride.name}</Text>
              <View style={globalStyles.row}>
                <Icon name="star" size={16} color="#fbbf24" />
                <Text style={styles.rating}>{ride.rating}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.detailRow}>
            <Icon name="map-pin" size={20} color={COLORS.gray[500]} />
            <Text style={styles.detailText}>{ride.area}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="navigation" size={20} color={COLORS.gray[500]} />
            <Text style={styles.detailText}>{ride.distance}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="clock" size={20} color={COLORS.gray[500]} />
            <Text style={styles.detailText}>{ride.eta}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="users" size={20} color={COLORS.gray[500]} />
            <Text style={styles.detailText}>{ride.seats} seats available</Text>
          </View>
        </View>

        <View style={styles.priceCard}>
          <Text style={styles.priceLabel}>Total Fare</Text>
          <Text style={styles.price}>₹{ride.price}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.requestButton} onPress={handleRequestRide}>
        <Text style={styles.requestButtonText}>Request Ride</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: SIZES.h2,
    fontWeight: '600',
    color: COLORS.gray[900],
    marginLeft: SIZES.padding,
  },
  content: {
    flex: 1,
    padding: SIZES.padding,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.margin,
    ...globalStyles.shadow,
  },
  driverCard: {
    marginBottom: SIZES.margin,
  },
  iconContainer: {
    borderRadius: 30,
    padding: 12,
    marginRight: 16,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.gray[900],
    marginBottom: 4,
  },
  rating: {
    fontSize: SIZES.body,
    color: COLORS.gray[600],
    marginLeft: 4,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailText: {
    fontSize: SIZES.body,
    color: COLORS.gray[700],
    marginLeft: 12,
  },
  priceCard: {
    backgroundColor: COLORS.primary + '10',
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: SIZES.body,
    color: COLORS.gray[600],
    marginBottom: 4,
  },
  price: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.success,
  },
  requestButton: {
    backgroundColor: COLORS.primary,
    margin: SIZES.padding,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  requestButtonText: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: '600',
  },
});

export default RideDetailsScreen;
