import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import './modal-add-photo.styles.scss'
import { saveImage } from '../../redux/imagesReducer'
import { connect } from 'react-redux'

const AddPhoto = () => {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const [values, setValues] = React.useState({
		label: '',
		url: '',
	})

	const handleChange = (label) => (event) => {
		setValues({ ...values, [label]: event.target.value })
	}

	const submitData = () => {
		console.log(values)
		// console.log(saveImage)
		values.dispatch(saveImage())
	}

	return (
		<div>
			<div className='addPhotoBtn' onClick={handleClickOpen}>
				Add a photo
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Add a new photo</DialogTitle>
				<form>
					<DialogContent>
						<TextField
							autoFocus
							margin='dense'
							id='label'
							label='Label'
							type='label'
							fullWidth
							value={values.label}
							onChange={handleChange('label')}
						/>
					</DialogContent>
					<DialogContent>
						<TextField
							autoFocus
							margin='dense'
							id='image'
							label='Photo URL'
							type='url'
							fullWidth
							value={values.url}
							onChange={handleChange('url')}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color='primary'>
							Cancel
						</Button>
						<Button
							onClick={submitData}
							color='primary'
							className='submit-button'
							type='button'
						>
							Submit
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	)
}

export default AddPhoto
