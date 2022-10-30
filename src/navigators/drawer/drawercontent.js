import React from 'react';
import {View, Button} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const DrawerContent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <DrawerItem
          onPress={() => navigation.navigate('About')}
          icon={() => (
            <AntDesign name="home" size={20} style={{color: '#fff'}} />
          )}
          label="About "
          labelStyle={{color: '#fff'}}
        />

        <Divider style={{width: 280, backgroundColor: 'white'}} />
        <DrawerItem
          onPress={() => navigation.navigate('Profiles')}
          icon={({color, size}) => (
            <EvilIcon name="user" size={23} style={{color: '#fff'}} />
          )}
          label="Profiles"
          labelStyle={{color: '#fff'}}
        />
        <Divider style={{width: 280, backgroundColor: 'white'}} />

        <DrawerItem
          onPress={() => navigation.navigate('Favourite')}
          icon={() => (
            <Icon name="favorite-outline" size={20} style={{color: '#fff'}} />
          )}
          label="Favourite "
          labelStyle={{color: '#fff'}}
        />
        <Divider style={{width: 280, backgroundColor: 'white'}} />
        <DrawerItem
          onPress={() => navigation.navigate('Contact')}
          icon={({color, size}) => (
            <Icon name="phone-iphone" size={20} style={{color: '#fff'}} />
          )}
          label="Contact"
          labelStyle={{color: '#fff'}}
        />
        <Button
          onPress={() => navigation.navigate('Register')}
          title="Logout"></Button>
      </View>
    </View>
  );
};
export default DrawerContent;
