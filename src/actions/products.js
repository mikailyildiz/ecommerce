export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING'
export const FETCH_PRODUCTS_FULFILLED = 'FETCH_PRODUCTS_FULFILLED'
export const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED'

const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: fetch('/products/data.json', config)
        .then((res) => res.json())
        .then((res) => res),
    })
  }
}
