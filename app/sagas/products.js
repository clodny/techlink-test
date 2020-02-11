import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as productsActions from '../actions/products'
import { getProductsApi } from '../requests/products';
import { getErrorMessage } from '../utils/errorHandling';

export function* getProductsRequest(action) {
  const response = yield call(getProductsApi)
  if(!response.isAxiosError) {
    yield put({ type: productsActions.GET_PRODUCTS_REQUEST_SUCCESS, data: response.data })
  } else {
    yield put({ type: productsActions.GET_PRODUCTS_REQUEST_FAIL, error: { message: getErrorMessage(response) } })
  }
}

export default all([
  takeLatest(productsActions.GET_PRODUCTS_REQUEST, getProductsRequest),
])
