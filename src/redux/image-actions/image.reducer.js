import { ImageActionTypes } from './image.types'
import { setImages } from './image.actions'

const INITIAL_STATE = {
	images: null,
}

export const imageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ImageActionTypes.FETCH_IMAGES:
			return { ...state, images: action.payload }
		case ImageActionTypes.ADD_IMAGE:
			console.log(action.payload)
			return { ...state, images: [...state.notes, action.payload] }
		case ImageActionTypes.DELETE_IMAGE:
			return state
		default:
			return state
	}
}

export const addImage = () => async (dispatch, getState) => {
	const images = getState().images
	await fetch('http://localhost:3000/images', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(images),
	})
	alert('sucess')
}

export const loadImages = () => async (dispatch, getState) => {
	const Images = await fetch('http://localhost:3000/images').then((res) =>
		res.json()
	)
	dispatch(setImages(Images))
}
