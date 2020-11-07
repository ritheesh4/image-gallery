export const ADD_IMAGE = 'ADD_IMAGE'
export const LOAD_IMAGES = 'LOAD_IMAGES'

export const addImage = (image) => ({
	type: ADD_IMAGE,
	payload: image,
})

export const fetchImages = (images) => ({
	type: LOAD_IMAGES,
	payload: images,
})
