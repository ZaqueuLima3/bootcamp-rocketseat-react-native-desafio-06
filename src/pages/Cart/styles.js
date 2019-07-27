import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Cotent = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const ListItems = styled.FlatList``;

export const ProductItem = styled.View`
  flex: 1;
`;

export const ProductBody = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-right: 10px;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductInfoTitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ProductInfoPrice = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductFooter = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 10px;
  border-radius: 4px;
  background: #d7d7d7;
`;

export const ProductQtd = styled.TextInput`
  background: #fff;
  height: 26px;
  width: 51px;
  margin-left: 10px;
  padding: 0 15px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #c7c7c7;
`;

export const ProductTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ContentFooter = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FooterTitle = styled.Text`
  color: #999;
  font-size: 16px;
`;

export const Total = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FinishOrderButton = styled.TouchableOpacity`
  background: #7159c1;
  margin-top: auto;
  height: 42px;
  width: 100%;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FinishOrderButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
