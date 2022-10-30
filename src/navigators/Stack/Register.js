import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import firebase from '@react-native-firebase/app'
// let config = {
//   appId: '1:467951841366:android:161df543e7145ad59d4bf7',
//   apiKey: "AIzaSyBLnzSapHABo3DicVjQBtGwUu_q8iMi8XY",
//   authDomain: "database-a54b5.firebaseapp.com",
//   databaseURL: "https://database-a54b5.firebaseio.com",
//   projectId: "database-a54b5",
//   storageBucket: "database-a54b5.appspot.com",
//   messagingSenderId: "467951841366"
// };
// firebase.initializeApp(config);

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (email && password != '') {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log('response', res);
          Alert.alert(' User created successfully. You can login now');
          navigation.navigate('Login');
        })
        .catch(error => {
          console.log('error_+++++++++++', error);
          Alert.alert(error.message);
        });
    } else {
      Alert.alert(' Both fields are mandatory');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgbg}
          source={require('../../assets/back.png')}>
          <Text style={styles.title}>Sign Up </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'grey'}
            color={'black'}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            maxLength={10}
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
            color={'black'}
          />

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={'grey'}
            keyboardType="email-address"
            color={'black'}
          />

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={'grey'}
            color={'black'}
            secureTextEntry={true}
          />

          <View style={styles.button}>
            <Button title="Sign Up" onPress={signup}></Button>
          </View>
          <View style={styles.log}>
            <Text style={styles.logtext1}>Already have an account? </Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.logtext2}>
              {' '}
              Login
            </Text>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DE97E3',
  },
  title: {
    fontSize: 23,

    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6d69c3',
    marginVertical: 10,
    padding: 15,
  },
  imgbg: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  log: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  logtext1: {
    fontSize: 11,
    color: 'black',
    marginVertical: 3,
  },
  logtext2: {
    fontSize: 14,
    color: 'red',
    textDecorationLine:'underline'
  },
});
