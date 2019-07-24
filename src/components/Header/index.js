import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  CartButton,
  CounterItem,
  CounterItemText,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <CartButton onPress={() => {}}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <CounterItem>
          <CounterItemText>3</CounterItemText>
        </CounterItem>
      </CartButton>
    </Container>
  );
}
