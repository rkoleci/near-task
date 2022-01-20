import types from '../../types'

export function userProfile(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.USER_FETCH_PROFILE_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.USER_FETCH_PROFILE_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.USER_FETCH_PROFILE_ERROR:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}
 