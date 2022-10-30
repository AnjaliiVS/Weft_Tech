import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'column',
            marginHorizontal: 10,
            marginLeft: 0,
          }}>
          <Image
            source={require('../../assets/pic1.jpg')}
            style={styles.img}></Image>
          <Text
            onPress={() => navigation.navigate('ProductDetails')}
            style={styles.text}>
            Apple
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/pic2.jpg')}
            style={styles.img}></Image>
          <Text
            onPress={() => navigation.navigate('SamsungProd')}
            style={styles.text}>
            Samsung
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <View
          style={{
            flexDirection: 'column',
            marginHorizontal: 10,
            marginLeft: 0,
          }}>
          <Image
            source={require('../../assets/pic3.jpg')}
            style={styles.img}></Image>
          <Text
            onPress={() => navigation.navigate('RedmiProduct')}
            style={styles.text}>
            Redmi
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={require('../../assets/pic4.jpg')}
            style={styles.img}></Image>
          <Text
            onPress={() => navigation.navigate('OppoProduct')}
            style={styles.text}>
            OPPO
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  img: {
    height: 200,
    width: 165,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
