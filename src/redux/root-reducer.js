import { combineReducers } from 'redux'
import imageReducer from './image-actions/image.reducer'

export default combineReducers({
	imageReducer: imageReducer,
})
