// ScheduleScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Pickup</Text>
      {/* Add scheduling components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ScheduleScreen;