import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as productsActions from '../actions/products'
import { 
  getProductsApi, 
  getProductByIdApi, 
  addToCartApi, 
  removeFromCartApi
} from '../requests/products';
import { getErrorMessage } from '../utils/errorHandling';

export function* getProductsRequest() {
  const response = yield call(getProductsApi)
  if(!response.isAxiosError) {
    yield put({ type: productsActions.GET_PRODUCTS_REQUEST_SUCCESS, data: response.data })
  } else {
    yield put({ type: productsActions.GET_PRODUCTS_REQUEST_FAIL, error: { message: getErrorMessage(response) } })
  }
}

export function* getProductByIdRequest(action) {
  const response = yield call(getProductByIdApi, action.id)
  if(!response.isAxiosError) {
    yield put({ type: productsActions.GET_PRODUCT_BY_ID_REQUEST_SUCCESS, data: response.data })
  } else {
    yield put({ type: productsActions.GET_PRODUCT_BY_ID_REQUEST_FAIL, error: { message: getErrorMessage(response) } })
  }
}

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
    yield put({ type: productsActions.ADD_TO_CART_REQUEST_SUCCESS, ids: action.ids })
  } else {
    yield put({ type: productsActions.ADD_TO_CART_REQUEST_FAIL, error: { message: getErrorMessage(response) } })
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
  takeLatest(productsActions.GET_PRODUCTS_REQUEST, getProductsRequest),
  takeLatest(productsActions.GET_PRODUCT_BY_ID_REQUEST, getProductByIdRequest),
  takeLatest(productsActions.ADD_TO_CART_REQUEST, addToCartRequest),
  takeLatest(productsActions.REMOVE_FROM_CART_REQUEST, removeFromCartRequest),
  takeLatest(productsActions.CHANGE_QUANTITY_REQUEST, changeQuantityRequest),
])
