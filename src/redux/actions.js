export const ADD_IMAGE = 'ADD_IMAGE'
export const LOAD_IMAGES = 'LOAD_IMAGES'

export const addImage = (note) => ({
	type: ADD_IMAGE,
	payload: note,
})

export const fetchImages = (images) => ({
	type: LOAD_IMAGES,
	payload: images,
})
