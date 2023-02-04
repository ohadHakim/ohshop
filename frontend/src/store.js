import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import productsReducer from "./reducers/productReducers/productsSlice"
import productDetailReducer from "./reducers/productReducers/productDetailSlice"
import cartReducer from "./reducers/cartReducers/cartSlice"

const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  },
  preloadedState: {},
  middleware,
})

export default store
