import { createStore, applyMiddleware } from 'redux'
import { imagesReducer } from './imagesReducer'
import thunk from 'redux-thunk'

export const store = createStore(imagesReducer, applyMiddleware(thunk))
