export const GET_PROFILE_PENDING = 'GET_PROFILE_PENDING'
export const GET_PROFILE_FULFILLED = 'GET_PROFILE_FULFILLED'
export const GET_PROFILE_REJECTED = 'GET_PROFILE_REJECTED'

export const LOGOUT_PENDING = 'LOGOUT_PENDING'
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED'
export const LOGOUT_REJECTED = 'LOGOUT_REJECTED'

const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

export function getProfile({ username, password }) {
  return (dispatch) => {
    dispatch({
      type: 'GET_PROFILE',
      payload: fetch('/user/data.json', config).then((res) => res.json()),
    })
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT',
      payload: fetch('/user/data.json', config).then((res) => res.json()),
    })
  }
}
