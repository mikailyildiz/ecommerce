import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
} from '../actions/products'

const initialState = {
  fetching: false,
  productList: {},
  error: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_PRODUCTS_FULFILLED:
      return {
        ...state,
        productList: payload,
        fetching: false,
        status: true,
      }
    case FETCH_PRODUCTS_REJECTED:
      return {
        ...state,
        error: payload,
        fetching: false,
      }
    default:
      return state
  }
}
