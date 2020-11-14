import React from 'react'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import './modal-add-photo.styles.scss'
import { saveImage } from '../../redux/imagesReducer'
import { connect } from 'react-redux'

const AddPhoto = (props) => {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const [values, setValues] = React.useState({
		name: '',
		img: '',
	})

	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value })
	}

	const submitData = () => {
		props.dispatch(saveImage(values))
		handleClose()
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
				className='modal-body'
			>
				<DialogTitle id='form-dialog-title' className='add-photo-title'>
					Add a new photo
				</DialogTitle>
				<form>
					<DialogContent>
						<div className='input-label'>Label</div>
						<input
							autoFocus
							margin='dense'
							id='name'
							label='name'
							type='label'
							value={values.name}
							onChange={handleChange('name')}
							className='input-section'
							placeholder='label'
						/>
					</DialogContent>
					<DialogContent>
						<div className='input-label'>Photo</div>
						<input
							autoFocus
							margin='dense'
							id='image'
							label='Photo URL'
							type='url'
							value={values.img}
							onChange={handleChange('img')}
							className='input-section'
							placeholder='Photo'
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>
							<span className='cancel-btn'>
								C<span style={{ textTransform: 'lowercase' }}>ancel</span>
							</span>
						</Button>
						<Button
							onClick={submitData}
							color='primary'
							className='submit-button'
							type='button'
						>
							S<span style={{ textTransform: 'lowercase' }}>ubmit</span>
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	)
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(AddPhoto)
