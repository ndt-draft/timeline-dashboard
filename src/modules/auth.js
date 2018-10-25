import api from './api'

// Constants

// Thunks
export const signup = values => {
  return dispatch => {
    api.auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // ...
      })
  }
}

export const signin = values => {
  return dispatch => {
    api.auth
      .signInWithEmailAndPassword(values.email, values.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // ...
      })
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
