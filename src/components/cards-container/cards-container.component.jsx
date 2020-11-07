import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '../card/card.component'
import { connect } from 'react-redux' /* code change */
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

class CardContainer extends React.Component {
	// const classes = useStyles()

	render() {
		return (
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='center'
				spacing={3}
				style={{
					width: '95vw',
					margin: 'auto',
					minHeight: '83.4vh',
					// paddingTop: '5rem',
				}}
			>
				{this.props.images
					? this.props.images.map((item) => (
							<Card
								id={item.id}
								image={item.img}
								name={item.name}
								key={item.id}
							/>
					  ))
					: ''}
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	if (state.imagesReducer.images.length) {
		return { images: state.imagesReducer.images }
	} else return {}
}

export default connect(mapStateToProps)(CardContainer)
