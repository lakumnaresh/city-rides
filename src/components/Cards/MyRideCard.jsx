/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, SIZES } from '../../utils/constants';
import { globalStyles } from '../../styles/globalStyles';

const MyRideCard = ({ ride }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return { text: COLORS.success, bg: COLORS.success + '20' };
      case 'scheduled': return { text: COLORS.primary, bg: COLORS.primary + '20' };
      case 'cancelled': return { text: COLORS.error, bg: COLORS.error + '20' };
      default: return { text: COLORS.gray[600], bg: COLORS.gray[100] };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'check-circle';
      case 'scheduled': return 'clock';
      case 'cancelled': return 'x-circle';
      default: return 'clock';
    }
  };

  const statusStyle = getStatusColor(ride.status);

  return (
    <View style={[globalStyles.card, styles.container]}>
      <View style={[globalStyles.spaceBetween,{flex:1,alignItems:'flex-start'}]}>
        <View style={[globalStyles.row,{flex:1}]}>
          <View style={styles.iconContainer}>
            <Icon 
              name={ride.type === 'car' ? 'truck' : 'smartphone'} 
              size={20} 
              color={COLORS.gray[500]} 
            />
          </View>
          <View style={styles.rideInfo}>
            <Text style={styles.driverName}>{ride.driver}</Text>
            <Text style={styles.route}>{ride.route}</Text>
          </View>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
          <Icon name={getStatusIcon(ride.status)} size={16} color={statusStyle.text} />
          <Text style={[styles.statusText, { color: statusStyle.text }]}>
            {ride.status}
          </Text>
        </View>
      </View>
      
      <View style={globalStyles.spaceBetween}>
        <View style={globalStyles.row}>
          <Icon name="calendar" size={14} color={COLORS.gray[500]} />
          <Text style={styles.dateTime}>{ride.date} at {ride.time}</Text>
        </View>
        <Text style={styles.price}>₹{ride.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.margin,
  },
  iconContainer: {
    backgroundColor: COLORS.gray[100],
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
  },
  rideInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: SIZES.body,
    fontWeight: '600',
    color: COLORS.gray[900],
  },
  route: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    fontSize: SIZES.small,
    fontWeight: '500',
    marginLeft: 4,
    textTransform: 'capitalize',
  },
  dateTime: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginLeft: 8,
  },
  price: {
    fontSize: SIZES.body,
    fontWeight: '600',
    color: COLORS.gray[900],
  },
});

export default MyRideCard;