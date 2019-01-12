import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/RootReducer.js'

const createStoreWithMiddleware = 
  applyMiddleware(
    thunk
  )(createStore)

  export default () => createStoreWithMiddleware(rootReducer)