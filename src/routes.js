import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Image, View, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from './assets/images/logo1.png';

import Home from './pages/Home';
import Cart from './pages/Cart';

const LogoTitle = () => {
  return (
    <View
      style={{
        marginLeft: 10,
      }}>
      <Image source={logo} />
    </View>
  );
};

const CartButton = ({ navigation }) => {
  // const { navigate } = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.navigate('Cart')}>
      <Icon
        style={{
          marginRight: 10,
        }}
        name="shopping-basket"
        size={30}
        color="#fff"
      />
    </TouchableHighlight>
  );
};

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#191920',
        },
        headerLeft: <LogoTitle />,
        headerRight: <CartButton />,
      },
    },
  ),
);

export default Routes;
