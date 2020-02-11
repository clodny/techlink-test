import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import history from '../utils/history'

export default combineReducers({
  router: connectRouter(history),
  products,
})
