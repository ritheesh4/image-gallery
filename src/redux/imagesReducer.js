import { ADD_IMAGE, fetchImages, LOAD_IMAGES, SELECT_IMAGE } from './actions'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const HOST_URL = 'http://localhost:8000'

const initialState = {
	images: [],
	image: null,
	currentImage: null,
}

export const imagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_IMAGE: {
			return { ...state, image: action.payload }
		}
		case LOAD_IMAGES: {
			return { ...state, images: action.payload }
		}
		case SELECT_IMAGE: {
			return { image: action.payload }
		}
		default:
			return state
	}
}

export const saveImage = (image) => async (dispatch) => {
	const body = {
		name: image.name,
		img: image.img,
	}
	const token = localStorage.getItem('access_token')

	try {
		await axios
			.post(`${HOST_URL}/images`, body, {
				headers: {
					Authorization: `Bearer ${token} `,
				},
			})
			.then((res) => {
				dispatch(loadImages())
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

export const searchImage = (seachWord) => async (dispatch) => {
	try {
		const token = localStorage.getItem('access_token')
		const images = await axios.get(`${HOST_URL}/images?q=${seachWord}`, {
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

export const deleteImage = (password, id) => async (dispatch) => {
	const userName = getUserName()

	try {
		axios
			.post(`${HOST_URL}/auth/login`, {
				email: userName,
				password: password.password,
			})
			.then((res) => {
				if (res.data.access_token) {
					// dispatch(signIn(decodedToken))
					console.log('delete executing')
					dispatch(deleteImageRequest(id))
				} else {
					alert('wrong password')
				}
			})
	} catch {}
}

const deleteImageRequest = (id) => (dispatch) => {
	const token = localStorage.getItem('access_token')
	try {
		axios
			.delete(`${HOST_URL}/images/${id}`, {
				headers: {
					Authorization: `Bearer ${token} `,
				},
			})
			.then((res) => {
				dispatch(loadImages())
			})
	} catch {}
}

const getUserName = () => {
	let decodedToken = jwt_decode(localStorage.getItem('access_token'))
	// console.log(decodedToken)
	const userName = decodedToken.email
	return userName
}
