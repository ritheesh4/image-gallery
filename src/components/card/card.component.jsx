/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardBody from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import './card.styles.scss'
import { connect } from 'react-redux'
import DeletePhoto from '../modal-delete-photo/modal-delete-photo.component'
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		flexGrow: 1,
		'&:hover $deleteBtn': {
			display: 'block',
		},
		'&:hover $imageDescription': {
			display: 'block',
		},
		'&:hover $media': {
			opacity: 0.2,
		},
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
		opacity: 1,
		backgroundColor: 'black',
	},
	deleteBtn: {
		display: 'none',
	},

	imageDescription: {
		display: 'none',
		position: 'absolute',
		marginLeft: '5%',
		marginBottom: '5%',
		marginRight: '5%',
		marginTop: '10%',
		overflow: 'hidden',
		// width: '4rem',
	},
}))

const Card = ({ id, image, name }) => {
	const classes = useStyles()
	const selectedCard = (e) => {}

	return (
		<Grid item xs={4}>
			<CardBody className={classes.root}>
				<div className={classes.deleteBtn}>
					<DeletePhoto id={id} />
				</div>
				<div className={classes.imageDescription}>{name}</div>
				{/* <Grid container direction="row" justify="center" alignItems="center"> */}
				<CardMedia
					className={classes.media}
					image={image}
					title={name}
					onClick={selectedCard}
					onDoubleClick={(e) => {
						e.preventDefault()
						window.location.href = `#${name}`
					}}
				/>
			</CardBody>
			<div className='lightbox-target' id={name}>
				<img src={image} alt={name} />
				<a className='lightbox-close' href='#' />
			</div>
		</Grid>
	)
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Card)
