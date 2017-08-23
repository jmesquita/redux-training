import { combineReducers  } from 'redux'

import sections from './sections'
import app from './app'

const rootReducer = combineReducers({
  sections,
  app
})

export default rootReducer
