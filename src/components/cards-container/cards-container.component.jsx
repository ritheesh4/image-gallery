import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '../card/card.component'
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		maxWidth: 345,
// 		flexGrow: 1,
// 	},
// 	media: {
// 		height: 0,
// 		paddingTop: '56.25%', // 16:9
// 	},
// }))

export default function CardContainer() {
	// const classes = useStyles()
	return (
		<Grid
			container
			direction='row'
			justify='center'
			alignItems='center'
			spacing={3}
			style={{ width: '95vw', margin: 'auto', minHeight: '83.4vh' }}
		>
			<Card />
		</Grid>
	)
}
