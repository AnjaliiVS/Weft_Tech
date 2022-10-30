import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Profiles() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my profile</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
