import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/navigators/BottomTab/Home';
import Profile from './src/navigators/BottomTab/Profile';
import SamsungProd from './src/navigators/Stack/SamsungProduct';
import Icon1 from 'react-native-vector-icons/Ionicons';
import DrawerContent from './src/navigators/drawer/drawercontent';
import Favourite from './src/navigators/drawer/favourite';
import Profiles from './src/navigators/drawer/profiles';
import About from './src/navigators/drawer/About';
import Contact from './src/navigators/drawer/contact';
import ProductDetails from './src/navigators/Stack/ProductDetails';
import Login from './src/navigators/Stack/Login';
import Register from './src/navigators/Stack/Register';
import OppoProduct from './src/navigators/Stack/OppoProduct';
import RedmiProduct from './src/navigators/Stack/RedmiProduct';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function StackNav() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="SamsungProd" component={SamsungProd} />
      <Stack.Screen name="OppoProduct" component={OppoProduct} />
      <Stack.Screen name="RedmiProduct" component={RedmiProduct} />
    </Stack.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Homee" component={BottomTabNav} />
      <Drawer.Screen name="Main" component={DrawerContent} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profiles" component={Profiles} />
      <Drawer.Screen name="Favourite" component={Favourite} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

function BottomTabNav() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 13},

          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon1 name="home" size={24} color="blue" />
            ) : (
              <Icon1 name="home-outline" size={24} color="grey" />
            ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 13},

          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon1 name="man" size={24} color="blue" />
            ) : (
              <Icon1 name="man-outline" size={24} color="grey" />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
