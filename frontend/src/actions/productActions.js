import {
  products_request,
  products_success,
  products_fail,
} from "../reducers/productReducers/productsSlice"
import axios from "axios"

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(products_request())
    const { data } = await axios.get("/api/products")
    dispatch(products_success(data))
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    dispatch(products_fail(error))
  }
}
