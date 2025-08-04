/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ProfileEditor from '../components/Profile/ProfileEditor';
import { menuItems, defaultUserProfile } from '../data/mockData';
import { COLORS, SIZES } from '../utils/constants';
import { globalStyles } from '../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const MoreScreen = () => {
  const [userProfile, setUserProfile] = useState(defaultUserProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to AsyncStorage or API
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const handleMenuPress = (item) => {
    if (item.title === 'Logout') {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Logout', style: 'destructive', onPress: () => {
            // Handle logout
            console.log('User logged out');
          }},
        ]
      );
    } else {
      // Handle other menu items
      console.log('Pressed:', item.title);
    }
  };

  return (<SafeAreaView style={globalStyles.rootView}>
    <View style={globalStyles.container}>
      {/* Header */}
      {/* <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>RidePool</Text>
        <Text style={globalStyles.headerSubtitle}>Safe & Affordable Rides</Text>
      </View> */}

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Profile Section */}
        {isEditing ? (
          <ProfileEditor 
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            onSave={handleSaveProfile}
          />
        ) : (
          <View style={[globalStyles.card, styles.profileCard]}>
            <View style={[globalStyles.spaceBetween,{flex:1}]}>
              <View style={[globalStyles.row,{flex:1}]}>
                <View style={styles.avatarContainer}>
                  <Icon name="user" size={32} color={COLORS.white} />
                </View>
                <View style={styles.profileInfo}>
                  <Text style={styles.userName}>{userProfile.name}</Text>
                  <Text style={styles.userPhone}>{userProfile.phone}</Text>
                  <Text style={styles.userEmail}>{userProfile.email}</Text>
                </View>
              </View>
              <TouchableOpacity 
                onPress={() => setIsEditing(true)}
                style={styles.editButton}
              >
                <Icon name="edit-3" size={20} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{userProfile.rating}</Text>
                <Text style={styles.statLabel}>Rating</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{userProfile.totalRides}</Text>
                <Text style={styles.statLabel}>Total Rides</Text>
              </View>
            </View>
          </View>
        )}

        {/* Menu Items */}
        <View style={[globalStyles.card, styles.menuContainer]}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index !== menuItems.length - 1 && styles.menuItemBorder
              ]}
              onPress={() => handleMenuPress(item)}
            >
              <View style={styles.menuIcon}>
                <Icon name={item.icon} size={20} color={COLORS.gray[500]} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Icon name="chevron-right" size={20} color={COLORS.gray[400]} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>);
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: SIZES.padding,
  },
  profileCard: {
    marginBottom: SIZES.margin * 1.5,
  },
  avatarContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    color: COLORS.gray[900],
  },
  userPhone: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginTop: 2,
  },
  userEmail: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginTop: 2,
  },
  editButton: {
    backgroundColor: COLORS.primary + '20',
    borderRadius: 20,
    padding: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray[200],
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.gray[900],
  },
  statLabel: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginTop: 4,
  },
  menuContainer: {
    padding: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[100],
  },
  menuIcon: {
    backgroundColor: COLORS.gray[100],
    borderRadius: 26,
    padding: 12,
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: SIZES.body,
    fontWeight: '500',
    color: COLORS.gray[900],
  },
  menuSubtitle: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginTop: 2,
  },
});

export default MoreScreen;