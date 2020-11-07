import { SIGN_IN, SIGN_UP, signUp } from './login.actions'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const HOST_URL = 'http://localhost:8000'

const initialState = {
	token: null,
}

export const userAuthentication = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN: {
			return { ...state, token: action.payload }
		}
		case SIGN_UP: {
			return { ...state, token: action.payload }
		}
		default:
			return state
	}
}

export const signInRequest = (user) => async (dispatch) => {
	console.log(user)
	try {
		axios
			.post(`${HOST_URL}/auth/login`, {
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				if (res.data.access_token) {
					localStorage.setItem('access_token', res.data.access_token)
					localStorage.setItem('refresh_token', res.data.access_token)
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
				.post(`${HOST_URL}/auth/login`, {
					refresh_token: localStorage.getItem('refresh_token'),
				})
				.then((res) => {
					console.log('respones of saved user', res.data.access_token)
					if (res.data.access_token) {
						localStorage.setItem('access_token', res.data.access_token)
						localStorage.setItem('refresh_token', res.data.access_token)
					}
				})
		} catch {}
	} else {
		localStorage.removeItem('refresh_token')
		localStorage.removeItem('access_token')
	}
}

export const signUpRequest = (user) => async (dispatch) => {
	console.log('loaded')
	try {
		axios
			.post(`${HOST_URL}/auth/register`, {
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				console.log('respones of saved user', res.data.access_token)
				if (res.data.access_token) {
					localStorage.setItem('access_token', res.data.access_token)
					localStorage.setItem('refresh_token', res.data.access_token)
					dispatch(signUp(res.data.access_token))
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
