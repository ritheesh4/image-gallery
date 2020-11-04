import { ADD_IMAGE, fetchImages, LOAD_IMAGES } from './actions'

const initialState = {
	images: [],
}

export const imagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_IMAGE: {
			return { ...state, image: [...state.image, action.payload] }
		}
		case LOAD_IMAGES: {
			return { ...state, images: action.payload }
		}
		default:
			return state
	}
}

export const saveImage = () => async (dispatch, getState) => {
	const image = getState().image
	await fetch('http://localhost:3000/images', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify(image),
	})
	alert('Success')
}

export const loadImages = () => async (dispatch, getState) => {
	const images = await fetch('http://localhost:3000/images').then((res) =>
		res.json()
	)

	dispatch(fetchImages(images))
}
