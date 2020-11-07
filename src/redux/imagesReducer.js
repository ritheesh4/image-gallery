import { ADD_IMAGE, fetchImages, LOAD_IMAGES } from './actions'
import axios from 'axios'

const HOST_URL = 'http://localhost:8000'

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
			.post(`${HOST_URL}/images`, {
				name: image.name,
				img: image.img,
			})
			.then((res) => {
				console.log('respones of saved image', res.data)
				async function fetchNewData() {
					const images = await axios.get(`${HOST_URL}/images`)
					fetchImages(images.data)
					console.log(images.data)
				}
				fetchNewData()
			})
	} catch {}
}

export const loadImages = () => async (dispatch) => {
	try {
		const token = localStorage.getItem('access_token')
		const images = await axios.get(`${HOST_URL}/images`, {
			headers: {
				Authorization: `Bearer ${token} `,
			},
		})
		dispatch(fetchImages(images.data))
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}
