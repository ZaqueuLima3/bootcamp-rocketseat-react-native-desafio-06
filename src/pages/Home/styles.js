import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const ProductItem = styled.View`
  height: 400px;
  width: 250px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
  margin-right: 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 100%;
`;

export const ProductInfo = styled.View`
  flex-direction: column;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const Price = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: #222;
  font-weight: bold;
`;

export const ProductButton = styled.TouchableOpacity`
  background: #7159c1;
  margin-top: auto;
  height: 42px;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
`;

export const QtdText = styled.Text`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 12px;
  background-color: #00000020;
`;

export const ProductButtonText = styled.Text`
  text-align: center;
  flex: 1;
  color: #fff;
  font-weight: bold;
`;
