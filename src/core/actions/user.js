import axios from 'axios'

import { baseUrl } from '../../addresses'
import types from '../../types'

export const fetchUserProfile = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.USER_FETCH_PROFILE_START
    });
    axios({
      method: 'GET',
      url: `${baseUrl}/user`,
    }).then((response) => { 
      dispatch({
        type: types.USER_FETCH_PROFILE_SUCCESS,
        payload: {
          data: response.data
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.USER_FETCH_PROFILE_ERROR,
        payload: {
          error,
        },
      })
    });
  }
}