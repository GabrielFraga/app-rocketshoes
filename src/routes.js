import React from 'react';

import { Image, TouchableHighlight } from 'react-native';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from './assets/images/logo1.png';

import Home from './pages/Home';
import Cart from './pages/Cart';

const LogoTitle = withNavigation(({ navigation }) => {
  return (
    <TouchableHighlight
      style={{
        marginLeft: 10,
      }}
      onPress={() => navigation.navigate('Home')}>
      <Image source={logo} />
    </TouchableHighlight>
  );
});

const CartButton = withNavigation(({ navigation }) => {
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
});

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
