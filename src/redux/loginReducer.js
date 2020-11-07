import { SIGN_IN, SIGN_UP, signUp } from './login.actions'
import axios from 'axios'

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
				console.log('respones of saved user', res.data.access_token)
				if (res.data.access_token) {
					console.log('logged in')
				}
				// dispatch(signIn(res.data.access_token))
				localStorage.setItem('token', res.data.access_token)
			})
	} catch {}
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
					console.log('logged in')
				}
				localStorage.setItem('token', res.data.access_token)
				dispatch(signUp(res.data.access_token))
			})
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}
