import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import api from '../../services/api';

// import { formatPrice } from '../../utils/format';

import {
  Container,
  ProductItem,
  ProductImage,
  ProductInfo,
  Title,
  Price,
  ProductButton,
  Qtd,
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

  handleGetProductsData = async () => {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: `R$ ${product.price}`,
    }));

    this.setState({ products: data });
  };

  keyExtractor = item => String(item.id);

  renderItem = ({ item }) => (
    <ProductItem>
      <ProductImage source={{ uri: item.image }} />
      <ProductInfo>
        <Title>{item.title}</Title>
        <Price>{item.priceFormatted}</Price>
      </ProductInfo>
      <ProductButton onPress={() => {}}>
        <Qtd>
          <QtdText>3</QtdText>
        </Qtd>
        <ProductButtonText>Adicionar </ProductButtonText>
      </ProductButton>
    </ProductItem>
  );

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          data={products}
          horizontal
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

export default Home;
