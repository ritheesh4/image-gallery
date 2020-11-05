import { SIGN_IN, SIGN_UP, signIn, signUp } from './login.actions'
import axios from 'axios'

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
			.post('http://localhost:8000/auth/login', {
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				console.log('respones of saved user', res.data.access_token)
				if (res.data.access_token) {
					console.log('logged in')
				}
				dispatch(signIn(res.data.access_token))
			})
	} catch {}
}

export const signUpRequest = (user) => async (dispatch) => {
	console.log('loaded')
	try {
		axios
			.post('http://localhost:8000/auth/login', {
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				console.log('respones of saved user', res.data.access_token)
				if (res.data.access_token) {
					console.log('logged in')
				}
				dispatch(signUp(res.data.access_token))
			})
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}
