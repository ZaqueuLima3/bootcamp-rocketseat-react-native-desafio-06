import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    <ProductItem>
      <ProductBody>
        <ItemImage source={{ uri: item.image }} />

        <ProductInfo>
          <ProductInfoTitle>{item.title}</ProductInfoTitle>
          <ProductInfoPrice>{item.priceFormatted}</ProductInfoPrice>
        </ProductInfo>
      </ProductBody>

      <ProductFooter>
        <ProductQtd value={String(item.amount)} editable={false} />

        <ProductTotal>{item.subTotal}</ProductTotal>
      </ProductFooter>
    </ProductItem>
  );

  render() {
    const { cart, total } = this.props;
    console.tron.log();
    return (
      <Container>
        <Cotent>
          <ListItems
            data={cart}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />

          <ContentFooter>
            <FooterTitle>Total</FooterTitle>

            <Total>{total}</Total>

            <FinishOrderButton onPress={() => {}}>
              <FinishOrderButtonText>Finalizar pedido</FinishOrderButtonText>
            </FinishOrderButton>
          </ContentFooter>
        </Cotent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: `R$ ${(product.price * product.amount).toFixed(2)}`.replace(
      '.',
      ','
    ),
  })),
  total: `R$ ${state.cart
    .reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
    .toFixed(2)}`.replace('.', ','),
});

export default connect(mapStateToProps)(Cart);
