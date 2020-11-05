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
			.post('http://localhost:3000/login', {
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				console.log('respones of saved user', res.data.email)
				if (res.data.email) {
					console.log('logged in')
				}
				dispatch(signIn(res.data.email))
			})
	} catch {}
}

export const signUpRequest = () => async (dispatch) => {
	console.log('loaded')
	try {
		const userDetails = await axios.get('http://localhost:3000/user')
		console.log(userDetails)
		dispatch(signUp(userDetails.data))
	} catch (err) {
		// Handle Error Here
		console.error(err)
	}
}
