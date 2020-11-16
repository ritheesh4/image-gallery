import { ADD_IMAGE, fetchImages, LOAD_IMAGES, SELECT_IMAGE } from './actions'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
require('dotenv').config()

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

export const saveImage = (imageData) => async (dispatch) => {
	const token = localStorage.getItem('access_token')

	try {
		await axios
			.post(
				`${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_SAVE}`,
				imageData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${token} `,
					},
				}
			)
			.then((res) => {
				dispatch(loadImages())
			})
	} catch {}
}

export const loadImages = () => async (dispatch) => {
	try {
		const token = localStorage.getItem('access_token')
		const images = await axios.get(
			`${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_IMAGES}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token} `,
				},
			}
		)
		dispatch(fetchImages(images.data))
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}

export const searchImage = (searchWord) => async (dispatch) => {
	// try {
	// 	const token = localStorage.getItem('access_token')
	// 	const images = await axios.get(
	// 		`${process.env.REACT_APP_HOST_URL}/images?q=${seachWord}`,
	// 		{
	// 			headers: {
	// 				Authorization: `Bearer ${token} `,
	// 			},
	// 		}
	// 	)
	// 	dispatch(fetchImages(images.data))
	// } catch (err) {
	// 	// Handle Error Here
	// 	console.error(err)
	// }

	try {
		const token = localStorage.getItem('access_token')
		const images = await axios.get(
			`${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_IMAGES}`,
			{
				headers: {
					Authorization: `Bearer ${token} `,
				},
			}
		)
		let filteredData = images.data.filter((obj) =>
			obj.name.toLowerCase().includes(searchWord.toLowerCase())
		)
		dispatch(fetchImages(filteredData))
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}

export const deleteImage = (password, id) => async (dispatch) => {
	const userName = getUserName()

	try {
		axios
			.post(
				`${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_LOGIN}`,
				{
					username: userName,
					password: password.password,
				}
			)
			.then((res) => {
				if (res.data.acces_token) {
					// dispatch(signIn(decodedToken)
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
		axios({
			method: 'delete',
			url: `${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_DELETE}/${id}`,
			headers: { Authorization: `Bearer ${token} ` },
		}).then((res) => {
			dispatch(loadImages())
		})
	} catch {}
}

const getUserName = () => {
	let decodedToken = jwt_decode(localStorage.getItem('access_token'))
	const userName = decodedToken.username
	return userName
}
