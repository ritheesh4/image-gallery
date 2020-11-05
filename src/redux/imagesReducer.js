import { ADD_IMAGE, fetchImages, LOAD_IMAGES } from './actions'
import axios from 'axios'

const initialState = {
	images: [],
	image: null,
}

export const imagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_IMAGE: {
			return { ...state, image: action.payload }
		}
		case LOAD_IMAGES: {
			return { ...state, images: action.payload }
		}
		default:
			return state
	}
}

// export const saveImage = () => (dispatch, getState) => {
// 	console.log('triggerd immage submission')
// 	const image = getState().image
// 	fetch('http://localhost:3000/images', {
// 		method: 'POST',
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-type': 'application/json',
// 		},
// 		body: JSON.stringify(image),
// 	})
// 	alert('Success')
// 	loadImages()
// }

export const saveImage = (image) => {
	console.log('hello')
	fetch('http://localhost:3000/images', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(image),
	})
	alert('Success')
	loadImages()
}

export const loadImages = () => async (dispatch, getState) => {
	try {
		const images = await axios.get('http://localhost:3000/images')
		dispatch(fetchImages(images.data))
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}
