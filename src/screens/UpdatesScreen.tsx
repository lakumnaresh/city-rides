import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import NewsCard from '../components/cards/NewsCard';
import { newsUpdates } from '../data/mockData';
import { COLORS, SIZES } from '../utils/constants';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const UpdatesScreen = () => {
  return (<SafeAreaView style={globalStyles.rootView}>
    <View style={globalStyles.container}>
      {/* Header */}
      {/* <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>RidePool</Text>
        <Text style={globalStyles.headerSubtitle}>Safe & Affordable Rides</Text>
      </View> */}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={globalStyles.screenTitle}>Latest Updates</Text>
        {newsUpdates.map(news => (
          <NewsCard key={news.id} news={news} />
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

export default UpdatesScreen;