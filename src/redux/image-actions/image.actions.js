const FETCH_IMAGES = 'FETCH_IMAGES'
const ADD_IMAGE = 'ADD_IMAGE'
// const DELETE_IMAGE = 'DELETE_IMAGE'

export const addImage = (image) => ({
	type: ADD_IMAGE,
	payload: image,
})

export const setImages = (images) => ({
	type: FETCH_IMAGES,
	payload: images,
})
