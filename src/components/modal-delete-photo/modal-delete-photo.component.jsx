import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import './modal-delete-photo..styles.scss'
import { deleteImage } from '../../redux/imagesReducer'
import { connect } from 'react-redux'

const DeletePhoto = (props) => {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const [values, setValues] = React.useState({
		password: '',
	})

	const handleChange = (password) => (event) => {
		setValues({ ...values, [password]: event.target.value })
	}

	const submitData = () => {
		props.dispatch(deleteImage(values, props.id))
		console.log(values, props.id)
		handleClose()
	}

	return (
		<div>
			<div className='deleteButton' onClick={handleClickOpen}>
				<p className='delete-text'>delete</p>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Are you sure?</DialogTitle>
				<form>
					<DialogContent>
						<TextField
							autoFocus
							margin='dense'
							id='password'
							label='password'
							type='password'
							fullWidth
							value={values.password}
							onChange={handleChange('password')}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color='primary'>
							Cancel
						</Button>
						<Button
							onClick={submitData}
							color='primary'
							className='delete-button'
							type='button'
						>
							Delete
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	)
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(DeletePhoto)
