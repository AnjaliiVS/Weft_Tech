import {View, Text,StyleSheet} from 'react-native';
import React from 'react';

export default function Favourite() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourite</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
