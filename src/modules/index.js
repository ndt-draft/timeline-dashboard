import { combineReducers } from 'redux'
import counter from './counter'
import timeline from './timeline'
import auth from './auth'

export default combineReducers({
  counter,
  timeline,
  auth
})
