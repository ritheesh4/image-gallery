import { SIGN_IN, SIGN_UP, signUp, signIn } from './login.actions'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const HOST_URL = 'http://localhost:8000'

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
			.post(`${HOST_URL}/auth/login`, {
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				if (res.data.access_token) {
					localStorage.setItem('access_token', res.data.access_token)
					localStorage.setItem('refresh_token', res.data.access_token)
					let decodedToken = jwt_decode(res.data.access_token)
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
				.post(`${HOST_URL}/auth/login`, {
					headers: {
						Authorization: localStorage.getItem('refresh_token'),
					},
					body: {},
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
	console.log(decodedToken)
	let jwt_exp = decodedToken.exp
	let current_time = new Date().getTime() / 1000
	if (current_time > jwt_exp) {
		return true
	} else {
		return false
	}
}

export const logoutFunction = () => async () => {
	const body = {}
	const token = localStorage.getItem('access_token')

	try {
		await axios
			.post(`${HOST_URL}/logout`, body, {
				headers: {
					Authorization: `Bearer ${token} `,
				},
			})
			.then((res) => {
				localStorage.removeItem('refresh_token')
				localStorage.removeItem('access_token')
			})
	} catch {}
}
