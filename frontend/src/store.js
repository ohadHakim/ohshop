import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import productsReducer from "./reducers/productReducers/productsSlice"

const middleware = [thunk]

const store = configureStore({
  reducer: {
    productList: productsReducer,
  },
  preloadedState: {},
  middleware,
})

export default store
