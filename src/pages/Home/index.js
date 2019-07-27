import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FlatList } from 'react-native';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

// import { formatPrice } from '../../utils/format';

import {
  Container,
  ProductItem,
  ProductImage,
  ProductInfo,
  Title,
  Price,
  ProductButton,
  QtdText,
  ProductButtonText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    this.handleGetProductsData();
  }

  handleAddProduct = async id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  handleGetProductsData = async () => {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: `R$ ${product.price.toFixed(2)}`.replace('.', ','),
    }));

    this.setState({ products: data });
  };

  keyExtractor = item => String(item.id);

  renderItem = ({ item }) => {
    const { amount } = this.props;

    return (
      <ProductItem>
        <ProductImage source={{ uri: item.image }} />
        <ProductInfo>
          <Title>{item.title}</Title>
          <Price>{item.priceFormatted}</Price>
        </ProductInfo>
        <ProductButton onPress={() => this.handleAddProduct(item.id)}>
          <QtdText>{amount[item.id] || 0}</QtdText>
          <ProductButtonText>ADICIONAR</ProductButtonText>
        </ProductButton>
      </ProductItem>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          data={products}
          extraData={this.props}
          horizontal
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
