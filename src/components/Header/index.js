import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  Logo,
  CartButton,
  CounterItem,
  CounterItemText,
} from './styles';

function Header({ navigation, cartQtd }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        {!!cartQtd && (
          <CounterItem>
            <CounterItemText>{cartQtd}</CounterItemText>
          </CounterItem>
        )}
      </CartButton>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartQtd: state.cart.length,
});

export default connect(mapStateToProps)(Header);
