import { defaultActionCreator } from './actionCreator';

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST'
export const ADD_TO_CART_REQUEST_SUCCESS = 'ADD_TO_CART_REQUEST_SUCCESS'
export const ADD_TO_CART_REQUEST_FAIL = 'ADD_TO_CART_REQUEST_FAIL'
export const addToCartRequest = defaultActionCreator(ADD_TO_CART_REQUEST, 'id')
export const addToCartRequestSuccess = defaultActionCreator(ADD_TO_CART_REQUEST_SUCCESS, 'item')
export const addToCartRequestFail = defaultActionCreator(ADD_TO_CART_REQUEST_FAIL, 'error')

export const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST'
export const REMOVE_FROM_CART_REQUEST_SUCCESS = 'REMOVE_FROM_CART_REQUEST_SUCCESS'
export const REMOVE_FROM_CART_REQUEST_FAIL = 'REMOVE_FROM_CART_REQUEST_FAIL'
export const removeFromCartRequest = defaultActionCreator(REMOVE_FROM_CART_REQUEST, 'ids')
export const removeFromCartRequestSuccess = defaultActionCreator(REMOVE_FROM_CART_REQUEST_SUCCESS, 'ids')
export const removeFromCartRequestFail = defaultActionCreator(REMOVE_FROM_CART_REQUEST_FAIL, 'error')

export const CHANGE_QUANTITY_REQUEST = 'CHANGE_QUANTITY_REQUEST'
export const CHANGE_QUANTITY_REQUEST_SUCCESS = 'CHANGE_QUANTITY_REQUEST_SUCCESS'
export const CHANGE_QUANTITY_REQUEST_FAIL = 'CHANGE_QUANTITY_REQUEST_FAIL'
export const changeQuantityRequest = defaultActionCreator(CHANGE_QUANTITY_REQUEST, 'id', 'quantity')
export const changeQuantityRequestSuccess = defaultActionCreator(CHANGE_QUANTITY_REQUEST_SUCCESS, 'id', 'quantity')
export const changeQuantityRequestFail = defaultActionCreator(CHANGE_QUANTITY_REQUEST_FAIL, 'error')
