import { combineReducers } from 'redux'
import cartReducer from '../features/Cart'
import productReducer from '../features/Product'

export default combineReducers({
  cart: cartReducer,
  product: productReducer,
})