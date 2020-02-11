import { defaultActionCreator } from './actionCreator';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_REQUEST_SUCCESS = 'GET_PRODUCTS_REQUEST_SUCCESS'
export const GET_PRODUCTS_REQUEST_FAIL = 'GET_PRODUCTS_REQUEST_FAIL'
export const getProductsRequest = defaultActionCreator(GET_PRODUCTS_REQUEST, 'id')
export const getProductsRequestSuccess = defaultActionCreator(GET_PRODUCTS_REQUEST_SUCCESS, 'data')
export const getProductsRequestFail = defaultActionCreator(GET_PRODUCTS_REQUEST_FAIL, 'error')
