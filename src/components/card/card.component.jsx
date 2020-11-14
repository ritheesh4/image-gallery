/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import CardBody from '@material-ui/core/Card'
// import CardMedia from '@material-ui/core/CardMedia'
// import Grid from '@material-ui/core/Grid'
import './card.styles.scss'
import { connect } from 'react-redux'
import DeletePhoto from '../modal-delete-photo/modal-delete-photo.component'

const Card = ({ id, image, name }) => {
	const selectedCard = (e) => {}

	return (
		<div className='card-body'>
			<div className='imageDescription'>{name}</div>
			<div className='deleteBtn'>
				<DeletePhoto id={id} />
			</div>

			<div className='card-fade-area'>
				{/* <Grid container direction="row" justify="center" alignItems="center"> */}
				<div className='img-container'>
					<img
						alt={name}
						src={image}
						className='card-image'
						onClick={selectedCard}
						onDoubleClick={(e) => {
							e.preventDefault()
							window.location.href = `#${name}`
						}}
					></img>
				</div>
			</div>
			<div className='lightbox-target' id={name}>
				<img src={image} alt={name} />
				<a className='lightbox-close' href='#' />
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Card)
