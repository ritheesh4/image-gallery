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

export const saveImage = (image) => {
	try {
		axios
			.post('http://localhost:8000/images', {
				name: image.name,
				img: image.img,
			})
			.then((res) => {
				console.log('respones of saved image', res.data)
				async function fetchNewData() {
					const images = await axios.get('http://localhost:8000/images')
					fetchImages(images.data)
					console.log(images.data)
				}
				fetchNewData()
			})
	} catch {}
}

export const loadImages = () => async (dispatch) => {
	console.log('loaded')
	try {
		const images = await axios.get('http://localhost:3000/images', {
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2MDQ1NzA5ODUsImV4cCI6MTYwNDU3NDU4NX0.MPKbX6z-NcHmPlFMAfHh_B_YvGgqx6YoLJySs3hROHc',
			},
		})
		dispatch(fetchImages(images.data))
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}
