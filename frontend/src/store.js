import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import productsReducer from "./reducers/productReducers/productsSlice"
import productDetailReducer from "./reducers/productReducers/productDetailSlice"

const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsReducer,
    productDetail: productDetailReducer,
  },
  preloadedState: {},
  middleware,
})

export default store
