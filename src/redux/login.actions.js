export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'

export const signUp = (token) => ({
	type: SIGN_UP,
	payload: token,
})

export const signIn = (userName) => ({
	type: SIGN_IN,
	payload: userName,
})
