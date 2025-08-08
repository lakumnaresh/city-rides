import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, SIZES } from '../../utils/constants';

const MapView2 = () => {
  return (
    <View style={styles.container}>
      {/* Mock map background */}
      <View style={styles.mapBackground} />
      
      {/* Mock roads */}
      <View style={[styles.road, styles.road1]} />
      <View style={[styles.road, styles.road2]} />
      <View style={[styles.road, styles.road3]} />
      
      {/* Start location marker */}
      <View style={styles.startMarker}>
        <View style={styles.startPin}>
          <Icon name="map-pin" size={16} color={COLORS.white} />
        </View>
        <Text style={styles.markerLabel}>Start</Text>
      </View>
      
      {/* End location marker */}
      <View style={styles.endMarker}>
        <View style={styles.endPin}>
          <Icon name="map-pin" size={16} color={COLORS.white} />
        </View>
        <Text style={styles.markerLabel}>End</Text>
      </View>
      
      {/* Route lines */}
      <View style={[styles.routeLine, styles.routeLine1]} />
      <View style={[styles.routeLine, styles.routeLine2]} />
      
      {/* Navigation button */}
      <TouchableOpacity style={styles.navButton}>
        <Icon name="navigation" size={20} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 256,
    backgroundColor: COLORS.gray[200],
    borderRadius: SIZES.radius,
    position: 'relative',
    overflow: 'hidden',
  },
  mapBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#e0f2fe',
  },
  road: {
    position: 'absolute',
    height: 4,
    backgroundColor: COLORS.gray[600],
  },
  road1: {
    top: 64,
    left: 32,
    width: 192,
    transform: [{ rotate: '12deg' }],
  },
  road2: {
    top: 128,
    left: 64,
    width: 128,
    transform: [{ rotate: '-12deg' }],
  },
  road3: {
    top: 96,
    right: 48,
    width: 160,
    transform: [{ rotate: '45deg' }],
  },
  startMarker: {
    position: 'absolute',
    top: 80,
    left: 48,
    alignItems: 'center',
  },
  endMarker: {
    position: 'absolute',
    bottom: 80,
    right: 64,
    alignItems: 'center',
  },
  startPin: {
    backgroundColor: COLORS.success,
    borderRadius: 20,
    padding: 8,
  },
  endPin: {
    backgroundColor: COLORS.error,
    borderRadius: 20,
    padding: 8,
  },
  markerLabel: {
    fontSize: SIZES.small,
    backgroundColor: COLORS.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  routeLine: {
    position: 'absolute',
    height: 2,
    backgroundColor: COLORS.black,
  },
  routeLine1: {
    top: 96,
    left: 64,
    width: 160,
    transform: [{ rotate: '12deg' }],
  },
  routeLine2: {
    top: 112,
    left: 128,
    width: 128,
    transform: [{ rotate: '45deg' }],
  },
  navButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 8,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default MapView2;