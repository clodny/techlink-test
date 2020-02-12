import some from 'lodash/some';
import { 
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_REQUEST_SUCCESS,
  GET_PRODUCTS_REQUEST_FAIL,
  GET_PRODUCT_BY_ID_REQUEST_FAIL,
  REMOVE_FROM_CART_REQUEST_FAIL,
  ADD_TO_CART_REQUEST_FAIL,
  CHANGE_QUANTITY_REQUEST_FAIL,
  ADD_TO_CART_REQUEST_SUCCESS,
  GET_PRODUCT_BY_ID_REQUEST_SUCCESS,
  REMOVE_FROM_CART_REQUEST_SUCCESS,
} from '../actions/products';

let initialState = {
  data: [],
  cart: [],
  error: null,
  isLoading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case CHANGE_QUANTITY_REQUEST_FAIL:
    case REMOVE_FROM_CART_REQUEST_FAIL:
    case ADD_TO_CART_REQUEST_FAIL:
    case GET_PRODUCT_BY_ID_REQUEST_FAIL:
    case GET_PRODUCTS_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case GET_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case GET_PRODUCT_BY_ID_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case ADD_TO_CART_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart, action.id]
      }
    case REMOVE_FROM_CART_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: state.cart.filter(cartItem => !some(action.ids, idToRemove => idToRemove === cartItem.id))
      }
    default:
      return state
  }
}
