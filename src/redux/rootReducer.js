import { combineReducers } from 'redux'
import { imagesReducer } from './imagesReducer'
import { userAuthentication } from './loginReducer'

export default combineReducers({
	imagesReducer,
	userAuthentication,
})
