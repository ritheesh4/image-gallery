/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardBody from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import './card.styles.scss'
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		flexGrow: 1,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
}))

export default function Card({ id, image, name }) {
	const classes = useStyles()
	return (
		<Grid item xs={4}>
			<CardBody className={classes.root}>
				{/* <Grid container direction="row" justify="center" alignItems="center"> */}
				<CardMedia
					className={classes.media}
					image={image}
					title={name}
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
