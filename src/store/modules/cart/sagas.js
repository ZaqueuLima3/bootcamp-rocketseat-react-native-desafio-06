import { Alert } from 'react-native';
import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: `R$ ${response.data.price.toFixed(2)}`.replace('.', ','),
    };

    yield put(addToCartSuccess(data));

    NavigationActions.navigate('Cart');
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
