/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, SIZES } from '../../utils/constants';
import { globalStyles } from '../../styles/globalStyles';

const RideCard = ({ ride, onPress }) => {
  return (
    <TouchableOpacity style={[globalStyles.card, styles.container]} onPress={onPress}>
      <View style={[globalStyles.spaceBetween]}>
        <View style={[globalStyles.row,{flex:1}]}>
          <View style={[styles.iconContainer, { backgroundColor: COLORS.primary + '20' }]}>
            <Icon 
              name={ride.type === 'car' ? 'truck' : 'smartphone'} 
              size={20} 
              color={COLORS.primary} 
            />
          </View>
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>{ride.name}</Text>
            <View style={globalStyles.row}>
              <Icon name="star" size={14} color="#fbbf24" />
              <Text style={styles.rating}>{ride.rating}</Text>
            </View>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{ride.price}</Text>
          <Text style={styles.seats}>{ride.seats} seats</Text>
        </View>
      </View>
      
      <View style={[globalStyles.row, styles.routeContainer]}>
        <Icon name="map-pin" size={14} color={COLORS.gray[500]} />
        <Text style={styles.route}>{ride.area}</Text>
      </View>
      
      <View style={globalStyles.spaceBetween}>
        <View style={globalStyles.row}>
          <Icon name="navigation" size={14} color={COLORS.gray[500]} />
          <Text style={styles.detail}>{ride.distance}</Text>
        </View>
        <View style={globalStyles.row}>
          <Icon name="clock" size={14} color={COLORS.gray[500]} />
          <Text style={styles.detail}>{ride.eta}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.margin,
    //flex:1,
  },
  iconContainer: {
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: SIZES.body,
    fontWeight: '600',
    color: COLORS.gray[900],
  },
  rating: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginLeft: 4,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.success,
  },
  seats: {
    fontSize: SIZES.small,
    color: COLORS.gray[500],
  },
  routeContainer: {
    marginVertical: 8,
  },
  route: {
    fontSize: SIZES.caption,
    color: COLORS.gray[700],
    marginLeft: 8,
    flex: 1,
  },
  detail: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginLeft: 4,
  },
});

export default RideCard;