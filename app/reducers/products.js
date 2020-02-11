import { 
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_REQUEST_SUCCESS,
  GET_PRODUCTS_REQUEST_FAIL,
} from '../actions/products';

let initialState = {
  data: [],
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
    default:
      return state
  }
}
