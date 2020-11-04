import { ADD_IMAGE, fetchImages, addImage, LOAD_IMAGES } from './actions'

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

export const saveImage = () => (dispatch, getState) => {
	console.log('triggerd immage submission')
	const image = getState().image
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
	console.log('hi')
	const images = await fetch('http://localhost:3000/images').then((res) =>
		res.json()
	)
	dispatch(fetchImages(images))
}
