import api from './api'
import utils from './utils'
import { push } from 'connected-react-router'

// Constants
const UPDATE_AUTH_DATA = 'auth/UPDATE_AUTH_DATA'

// Actions
const updateAuthData = payload => ({
  type: UPDATE_AUTH_DATA,
  payload
})

// Thunks
export const signup = values => {
  return dispatch => {
    dispatch(removeErrorMessage())

    api.auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(({ user }) => {
        utils.saveUid(user.uid)
        dispatch(push('/'))
      })
      .catch(function(error) {
        // Handle Errors here.
        dispatch(
          updateAuthData({
            error
          })
        )
      })
  }
}

export const signin = values => {
  return dispatch => {
    dispatch(removeErrorMessage())

    api.auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then(({ user }) => {
        utils.saveUid(user.uid)
        dispatch(push('/'))
      })
      .catch(function(error) {
        // Handle Errors here.
        dispatch(
          updateAuthData({
            error
          })
        )
      })
  }
}

export const signout = () => {
  return dispatch => {
    utils.deleteUid()
    api.auth.signOut()
    dispatch(push('/signin'))
  }
}

export const removeErrorMessage = () => {
  return dispatch => {
    dispatch(
      updateAuthData({
        error: {}
      })
    )
  }
}

// Action handlers
const ACTION_HANDLERS = {
  [UPDATE_AUTH_DATA]: (state, action) => ({
    ...state,
    ...action.payload
  })
}

// Reducer
const initialState = {
  error: {}
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
