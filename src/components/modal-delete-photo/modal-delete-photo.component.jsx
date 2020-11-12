import React from 'react'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
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
				<DialogTitle className='confirmation-message'>
					Are you sure?
				</DialogTitle>
				<form>
					<DialogContent>
						<div className='password-label'>Password</div>
						<input
							id='password'
							label='password'
							type='password'
							value={values.password}
							onChange={handleChange('password')}
							className='password-delete'
							placeholder='password'
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>
							<span style={{ color: '#BDBDBD' }}>
								C
								<span
									style={{
										textTransform: 'lowercase',
										fontFamily: "'Noto Sans', sans-serif !important",
									}}
								>
									ancel
								</span>
							</span>
						</Button>
						<Button
							onClick={submitData}
							color='primary'
							className='delete-button'
							type='button'
						>
							<span className='delete-submit-text'>
								D<span style={{ textTransform: 'lowercase' }}>elete</span>
							</span>
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	)
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(DeletePhoto)
