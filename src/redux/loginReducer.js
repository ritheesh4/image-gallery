import { SIGN_IN, SIGN_UP, signUp, signIn } from './login.actions'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
require('dotenv').config()

const initialState = {
	userName: null,
}

export const userAuthentication = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN: {
			return { ...state, userName: action.payload }
		}
		case SIGN_UP: {
			return { ...state, token: action.payload }
		}
		default:
			return state
	}
}

export const signInRequest = (user) => async (dispatch) => {
	try {
		axios
			.post(
				`${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_LOGIN}`,
				{
					username: user.email,
					password: user.password,
				}
			)
			.then((res) => {
				console.log(res.data.acces_token)
				if (res.data.acces_token) {
					localStorage.setItem('access_token', res.data.acces_token)
					localStorage.setItem('refresh_token', res.data.refresh_token)
					let decodedToken = jwt_decode(res.data.acces_token)
					dispatch(signIn(decodedToken))
				}
			})
	} catch {}
}

export const signInRefreshRequest = () => async (dispatch) => {
	const token = localStorage.getItem('refresh_token')
	const tokenExpired = checkTokenExpiry(token)
	if (!tokenExpired) {
		try {
			axios
				.post(
					`${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_LOGIN}`,
					{
						headers: {
							Authorization: localStorage.getItem('refresh_token'),
						},
						body: {},
					}
				)
				.then((res) => {
					if (res.data.acces_token) {
						localStorage.setItem('access_token', res.data.acces_token)
						localStorage.setItem('refresh_token', res.data.refresh_token)
					}
				})
		} catch {}
	} else {
		localStorage.removeItem('refresh_token')
		localStorage.removeItem('access_token')
	}
}

export const signUpRequest = (user) => async (dispatch) => {
	try {
		axios
			.post(
				`${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_SIGNUP}`,
				{
					username: user.email,
					password: user.password,
				}
			)
			.then((res) => {
				if (res.data.acces_token) {
					localStorage.setItem('access_token', res.data.acces_token)
					localStorage.setItem('refresh_token', res.data.refresh_token)
					dispatch(signUp(res.data.acces_token))
				}
			})
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}

const checkTokenExpiry = (token) => {
	let decodedToken = jwt_decode(token)
	let jwt_exp = decodedToken.exp
	let current_time = new Date().getTime() / 1000
	if (current_time > jwt_exp) {
		return true
	} else {
		return false
	}
}

export const logoutFunction = (token) => async () => {
	try {
		// const token = localStorage.getItem('access_token')
		await axios
			.post(
				`${process.env.REACT_APP_HOST_URL}/${process.env.REACT_APP_PATH_LOGOUT}`,
				null,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				localStorage.removeItem('refresh_token')
				localStorage.removeItem('access_token')
			})
	} catch {}
}
