import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
const RedmiProduct = () => {
  const DATA = [
    require('../../assets/pic31.jpg'),

    require('../../assets/pic32.jpg'),
    require('../../assets/pic33.jpg'),
    require('../../assets/pic34.jpg'),
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
        }}>
        <SliderBox
          images={DATA}
          style={{height: 400, width: 400}}
          autoplayInterval={4000}
        />

        <View style={styles.phcontainer}>
          <Text style={{fontWeight: 'bold', color: '#D64E29'}}>Redmi A1</Text>
          <Text style={{margin: 10}}>
            There's an all-glass front and a colorful all-glass back that's
            housed in a color-matched aluminum frame. There's a notch on the
            front display of the iPhone 13 that, houses the TrueDepth Camera,
            speaker, and microphone. The notch is smaller this year, allowing
            for more overall display area.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RedmiProduct;

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  phcontainer: {
    alignItems: 'center',
  },
});
  
