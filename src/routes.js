import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Cart,
      Home,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#141419',
      },
    }
  )
);

export default Routes;
