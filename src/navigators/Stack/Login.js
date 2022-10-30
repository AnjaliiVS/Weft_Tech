import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (email && password != '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('response', res);
          navigation.navigate('DrawerNav');
        })
        .catch(error => {
          console.log('error', error);
          Alert.alert(error.message);
        });
    } else {
      Alert.alert(' Both fields are mandatory');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        source={require('../../assets/log.png')}>
        <Text style={styles.title}>Login </Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Username / Email"
          placeholderTextColor={'black'}
          keyboardType="email-address"
          color={'black'}
        />

        <TextInput
          style={styles.input2}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={'black'}
          color={'black'}
          secureTextEntry={true}
        />

        <View style={styles.button}>
          <Button title="Login" onPress={login}></Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbg: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    bottom: hp('8%'),
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6d69c3',
    bottom: hp('3%'),
    padding: 15,
  },
  input2: {
    height: 50,
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6d69c3',
    top: hp('0.5%'),
    padding: 15,
  },
  button: {
    width: 150,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
