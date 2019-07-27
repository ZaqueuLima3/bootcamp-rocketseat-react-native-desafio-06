import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  Cotent,
  ListItems,
  ProductItem,
  ProductBody,
  ItemImage,
  ProductInfo,
  ProductInfoTitle,
  ProductInfoPrice,
  ProductFooter,
  ProductQtd,
  ProductTotal,
  ContentFooter,
  FooterTitle,
  Total,
  FinishOrderButton,
  FinishOrderButtonText,
} from './styles';

class Cart extends Component {
  keyExtractor = item => String(item.id);

  renderItem = ({ item }) => (
    <ListItems
      data={[]}
      keyExtractor={this.keyExtractor}
      renderItem={this.renderItem}
    />
  );

  render() {
    return (
      <Container>
        <Cotent>
          <ProductItem>
            <ProductBody>
              <ItemImage
                source={{
                  uri:
                    'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
                }}
              />

              <ProductInfo>
                <ProductInfoTitle>Tenis</ProductInfoTitle>
                <ProductInfoPrice>R$ 179,90</ProductInfoPrice>
              </ProductInfo>
            </ProductBody>

            <ProductFooter>
              <ProductQtd value="3" />

              <ProductTotal>R$ 539,70</ProductTotal>
            </ProductFooter>
          </ProductItem>

          <ContentFooter>
            <FooterTitle>Total</FooterTitle>

            <Total>R$ 1619,10</Total>

            <FinishOrderButton onPress={() => {}}>
              <FinishOrderButtonText>Finalizar pedido</FinishOrderButtonText>
            </FinishOrderButton>
          </ContentFooter>
        </Cotent>
      </Container>
    );
  }
}

export default Cart;
