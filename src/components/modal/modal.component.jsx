import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardBody from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
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

export default function Card() {
	const classes = useStyles()
	return (
		<Grid
			container
			direction='row'
			justify='center'
			alignItems='center'
			spacing={3}
			style={{ width: '95vw', margin: 'auto', minHeight: '83.4vh' }}
		>
			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>
			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>
			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>

			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>
			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>
			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>

			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>
			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>
			<Grid item xs={4}>
				<CardBody className={classes.root}>
					{/* <Grid container direction="row" justify="center" alignItems="center"> */}
					<CardMedia
						className={classes.media}
						image='https://homepages.cae.wisc.edu/~ece533/images/peppers.png'
						title='Paella dish'
					/>
				</CardBody>
			</Grid>
		</Grid>
	)
}
