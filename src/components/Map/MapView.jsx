import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../utils/constants';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { MapPin } from 'lucide-react-native';
import { globalStyles } from '../../styles/globalStyles';

const MapViewCustom = () => {
  return (<View style={[globalStyles.card,styles.container]}>
    <MapView
        style={styles.map}
        initialRegion={{ latitude: 17.4375, longitude: 78.4483, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
        <Marker coordinate={{ latitude: 17.4375, longitude: 78.4483 }}><MapPin color="green" size={20} /></Marker>
        <Marker coordinate={{ latitude: 17.45, longitude: 78.48 }}><MapPin color="red" size={20} /></Marker>
        <Polyline coordinates={[{ latitude: 17.4375, longitude: 78.4483 }, { latitude: 17.45, longitude: 78.48 }]} strokeColor="black" strokeWidth={2} />
      </MapView>
      </View>);
};

const styles = StyleSheet.create({
   map: { height: 200, borderRadius: 8 },
   container:{
    padding:0,
    margin:0
   },
});

export default MapViewCustom;