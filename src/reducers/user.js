import {
  GET_PROFILE_PENDING,
  GET_PROFILE_FULFILLED,
  GET_PROFILE_REJECTED,
  LOGOUT_PENDING,
  LOGOUT_FULFILLED,
  LOGOUT_REJECTED,
} from '../actions/user'

const initialState = {
  fetching: false,
  profile: {},
  error: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_PENDING:
      return {
        ...state,
        fetching: true,
      }
    case GET_PROFILE_FULFILLED:
      return {
        ...state,
        profile: payload,
        fetching: false,
        status: true,
      }
    case GET_PROFILE_REJECTED:
      return {
        ...state,
        error: payload,
        fetching: false,
      }

    case LOGOUT_PENDING:
      return {
        ...state,
        fetching: true,
      }
    case LOGOUT_FULFILLED:
      return {
        ...state,
        profile: {},
        fetching: false,
        status: true,
      }
    case LOGOUT_REJECTED:
      return {
        ...state,
        error: payload,
        fetching: false,
      }
    default:
      return state
  }
}
