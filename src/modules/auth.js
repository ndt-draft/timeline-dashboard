import api from './api'
import utils from './utils'
import { push } from 'connected-react-router'

// Constants

// Thunks
export const signup = values => {
  return dispatch => {
    api.auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(({ user }) => {
        utils.saveUid(user.uid)
        dispatch(push('/'))
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code
        // var errorMessage = error.message
        // ...
      })
  }
}

export const signin = values => {
  return dispatch => {
    api.auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then(({ user }) => {
        utils.saveUid(user.uid)
        dispatch(push('/'))
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code
        // var errorMessage = error.message
        // ...
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

// Action handlers
const ACTION_HANDLERS = {}

// Reducer
const initialState = {}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
