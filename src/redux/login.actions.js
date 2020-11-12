export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'

export const signUp = (token) => ({
	type: SIGN_UP,
	payload: token,
})

export const signIn = (userName) => ({
	type: SIGN_IN,
	payload: userName,
})

export const logOut = (token) => ({
	type: LOG_OUT,
	payload: token,
})
