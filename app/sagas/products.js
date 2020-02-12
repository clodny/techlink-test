import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as productsActions from '../actions/products'
import { 
  addToCartApi, 
  removeFromCartApi,
  changeQuantityApi
} from '../requests/products';
import { getErrorMessage } from '../utils/errorHandling';

export function* addToCartRequest(action) {
  const response = yield call(addToCartApi, action.id)
  if(!response.isAxiosError) {
    yield put({ type: productsActions.ADD_TO_CART_REQUEST_SUCCESS, id: action.id })
  } else {
    yield put({ type: productsActions.ADD_TO_CART_REQUEST_FAIL, error: { message: getErrorMessage(response) } })
  }
}

export function* removeFromCartRequest(action) {
  const response = yield call(removeFromCartApi, action.ids)
  if(!response.isAxiosError) {
    yield put({ type: productsActions.REMOVE_FROM_CART_REQUEST_SUCCESS, ids: action.ids })
  } else {
    yield put({ type: productsActions.REMOVE_FROM_CART_REQUEST_FAIL, error: { message: getErrorMessage(response) } })
  }
}

export function* changeQuantityRequest(action) {
  const response = yield call(changeQuantityApi, action.id)
  if(!response.isAxiosError) {
    yield put({ type: productsActions.CHANGE_QUANTITY_REQUEST_SUCCESS, id: action.id, quantity: action.quantity })
  } else {
    yield put({ type: productsActions.CHANGE_QUANTITY_REQUEST_FAIL, error: { message: getErrorMessage(response) } })
  }
}

export default all([
  takeLatest(productsActions.ADD_TO_CART_REQUEST, addToCartRequest),
  takeLatest(productsActions.REMOVE_FROM_CART_REQUEST, removeFromCartRequest),
  takeLatest(productsActions.CHANGE_QUANTITY_REQUEST, changeQuantityRequest),
])
