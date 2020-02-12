import { defaultActionCreator } from './actionCreator';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_REQUEST_SUCCESS = 'GET_PRODUCTS_REQUEST_SUCCESS'
export const GET_PRODUCTS_REQUEST_FAIL = 'GET_PRODUCTS_REQUEST_FAIL'
export const getProductsRequest = defaultActionCreator(GET_PRODUCTS_REQUEST)
export const getProductsRequestSuccess = defaultActionCreator(GET_PRODUCTS_REQUEST_SUCCESS, 'data')
export const getProductsRequestFail = defaultActionCreator(GET_PRODUCTS_REQUEST_FAIL, 'error')

export const GET_PRODUCT_BY_ID_REQUEST = 'GET_PRODUCT_BY_ID_REQUEST'
export const GET_PRODUCT_BY_ID_REQUEST_SUCCESS = 'GET_PRODUCT_BY_ID_REQUEST_SUCCESS'
export const GET_PRODUCT_BY_ID_REQUEST_FAIL = 'GET_PRODUCT_BY_ID_REQUEST_FAIL'
export const getProductByIdRequest = defaultActionCreator(GET_PRODUCT_BY_ID_REQUEST, 'id')
export const getProductByIdRequestSuccess = defaultActionCreator(GET_PRODUCT_BY_ID_REQUEST_SUCCESS, 'data')
export const getProductByIdRequestFail = defaultActionCreator(GET_PRODUCT_BY_ID_REQUEST_FAIL, 'error')

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST'
export const ADD_TO_CART_REQUEST_SUCCESS = 'ADD_TO_CART_REQUEST_SUCCESS'
export const ADD_TO_CART_REQUEST_FAIL = 'ADD_TO_CART_REQUEST_FAIL'
export const addToCartRequest = defaultActionCreator(ADD_TO_CART_REQUEST, 'id')
export const addToCartRequestSuccess = defaultActionCreator(ADD_TO_CART_REQUEST_SUCCESS, 'data')
export const addToCartRequestFail = defaultActionCreator(ADD_TO_CART_REQUEST_FAIL, 'error')

export const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST'
export const REMOVE_FROM_CART_REQUEST_SUCCESS = 'REMOVE_FROM_CART_REQUEST_SUCCESS'
export const REMOVE_FROM_CART_REQUEST_FAIL = 'REMOVE_FROM_CART_REQUEST_FAIL'
export const removeFromCartRequest = defaultActionCreator(REMOVE_FROM_CART_REQUEST, 'ids')
export const removeFromCartRequestSuccess = defaultActionCreator(REMOVE_FROM_CART_REQUEST_SUCCESS, 'data')
export const removeFromCartRequestFail = defaultActionCreator(REMOVE_FROM_CART_REQUEST_FAIL, 'error')

export const CHANGE_QUANTITY_REQUEST = 'CHANGE_QUANTITY_REQUEST'
export const CHANGE_QUANTITY_REQUEST_SUCCESS = 'CHANGE_QUANTITY_REQUEST_SUCCESS'
export const CHANGE_QUANTITY_REQUEST_FAIL = 'CHANGE_QUANTITY_REQUEST_FAIL'
export const changeQuantityRequest = defaultActionCreator(CHANGE_QUANTITY_REQUEST, 'id', 'quantity')
export const changeQuantityRequestSuccess = defaultActionCreator(CHANGE_QUANTITY_REQUEST_SUCCESS, 'data')
export const changeQuantityRequestFail = defaultActionCreator(CHANGE_QUANTITY_REQUEST_FAIL, 'error')
