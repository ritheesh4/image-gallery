import { createStore, applyMiddleware } from 'redux'
// import { imagesReducer } from './imagesReducer'
// import { userAuthentication } from './loginReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import combineReducers from './rootReducer'

const middlewares = [logger, thunk]

export const store = createStore(
	combineReducers,
	applyMiddleware(...middlewares)
)
