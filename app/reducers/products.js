import some from 'lodash/some';
import findIndex from 'lodash/findIndex';
import update from 'react-addons-update';
import { 
  REMOVE_FROM_CART_REQUEST_FAIL,
  ADD_TO_CART_REQUEST_FAIL,
  CHANGE_QUANTITY_REQUEST_FAIL,
  ADD_TO_CART_REQUEST_SUCCESS,
  REMOVE_FROM_CART_REQUEST_SUCCESS,
  CHANGE_QUANTITY_REQUEST_SUCCESS,
} from '../actions/products';
import { products } from '../config/products'
 
let initialState = {
  data: products,
  cart: [],
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_QUANTITY_REQUEST_FAIL:
    case REMOVE_FROM_CART_REQUEST_FAIL:
    case ADD_TO_CART_REQUEST_FAIL:
      return {
        ...state,
        error: action.error
      }
    case ADD_TO_CART_REQUEST_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    case REMOVE_FROM_CART_REQUEST_SUCCESS:
      return {
        ...state,
        cart: state.cart.filter(cartItem => !some(action.ids, idToRemove => idToRemove === cartItem.id))
      }
    case CHANGE_QUANTITY_REQUEST_SUCCESS:
      const indexOfItem = findIndex(state.cart, { id: action.id })
      return update(state, { 
        cart: { 
          [indexOfItem]: {
            quantity: {$set: action.quantity}
          }
        }
      })
    default:
      return state
  }
}
