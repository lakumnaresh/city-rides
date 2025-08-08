import React, { useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, FlatList } from 'react-native';
import MyRideCard from '../components/cards/MyRideCard';
import { myRides } from '../data/mockData';
import { COLORS, SIZES } from '../utils/constants';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyRidesScreen = () => {

  const renderItem = useCallback(({item})=>{
    return (<MyRideCard key={item.id} ride={item} />);
  },[])

  return (<SafeAreaView style={globalStyles.rootView} >
     {/* <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content" // or 'light-content'
        /> */}
    <View style={[globalStyles.container,styles.content]}>
        <Text style={globalStyles.screenTitle}>My Rides</Text>
        <FlatList
        data={myRides}
        renderItem={renderItem} />
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