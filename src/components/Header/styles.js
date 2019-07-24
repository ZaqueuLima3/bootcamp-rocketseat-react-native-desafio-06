import styled from 'styled-components/native';
import { darken } from 'polished';

import logo from '../../assets/images/Logo.png';

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${darken(0.3, '#141419')};
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 24px;
  width: 185px;
`;

export const CartButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const CounterItem = styled.View`
  position: absolute;
  top: -10;
  right: -10;
  height: 20px;
  width: 20px;
  justify-content: flex-end;
  align-items: center;

  border-radius: 10px;
  background: #7159c1;
`;

export const CounterItemText = styled.Text`
  color: #fff;
`;
