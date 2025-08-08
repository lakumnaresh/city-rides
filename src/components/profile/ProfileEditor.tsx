import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../utils/constants';
import { globalStyles } from '../../styles/globalStyles';

const ProfileEditor = ({ userProfile, setUserProfile, onSave }) => {
  return (
    <View style={[globalStyles.card, styles.container]}>
      <View style={globalStyles.spaceBetween}>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity onPress={onSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={userProfile.name}
            onChangeText={(text) => setUserProfile({...userProfile, name: text})}
            placeholder="Enter your name"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={userProfile.phone}
            onChangeText={(text) => setUserProfile({...userProfile, phone: text})}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={userProfile.email}
            onChangeText={(text) => setUserProfile({...userProfile, email: text})}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.margin,
  },
  title: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.gray[900],
  },
  saveButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  saveText: {
    fontSize: SIZES.body,
    fontWeight: '500',
    color: COLORS.primary,
  },
  formContainer: {
    marginTop: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: SIZES.caption,
    color: COLORS.gray[600],
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: SIZES.radius,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: SIZES.body,
    color: COLORS.gray[900],
    backgroundColor: COLORS.white,
  },
});

export default ProfileEditor;