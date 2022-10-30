import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
const SamsungProd = () => {
  const DATAS = [
    require('../../assets/pic21.jpg'),
    require('../../assets/pic22.jpg'),
    require('../../assets/pic13.jpg'),
    require('../../assets/pic24.jpg'),
  ];
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
      }}>
      <SliderBox
        images={DATAS}
        style={{height: 400, width: 400}}
        autoplayInterval={4000}
      />

      <View style={styles.phcontainer}>
        <Text style={{fontWeight: 'bold', color: '#D64E29'}}>
          Samsung Galaxy s13
        </Text>
        <Text style={{margin: 10}}>
          Samsung Galaxy S13 Price Start In India is ₹ 89,499. The phone
          expected release date in india is September 2023. Samsung Galaxy S13
          phone comes with 12GB Ram & 256GB storage, 6.5 Inches Display, Rear
          four camera setup and Front 32MP Selfies. It’s Backed By 6500mAh
          battery and Powered By Exynos 9820 Processor. The phone runs on
          Android 11 and Based on One UI operating system.
        </Text>
        {/* <FlatList
                      horizontal= {true}
                      showsHorizontalScrollIndicator={false}
                      data={DATAS}
                      renderItem={({item}) => <View style={styles.FlatList}> 
           
                    <Image source={item} style={{height:170,width:120,borderRadius:9}}></Image>
                      </View>
                  }/> */}
      </View>
    </View>
  );
};

export default SamsungProd;

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  phcontainer: {
    alignItems: 'center',
  },

  FlatList: {
    backgroundColor: '#FFF',
    borderRadius: 9,
    marginHorizontal: 10,
    marginTop: 10,
    height: 170,
    alignItems: 'center',
  },
});
