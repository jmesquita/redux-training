import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const configureStore = () => {
  const middleware = [ thunk, createLogger() ]
  let store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
  return store
}

export default configureStore
