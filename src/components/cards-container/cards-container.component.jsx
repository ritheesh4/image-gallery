import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Grid from '@material-ui/core/Grid'
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
			<div className='cards-main-container'>
				{this.props.images
					? this.props.images.map((item) => (
							<Card
								id={item.id}
								image={item.imagename}
								name={item.label}
								key={item.id}
							/>
					  ))
					: ''}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	try {
		if (state.imagesReducer.images.length) {
			return { images: state.imagesReducer.images }
		} else return {}
	} catch {}
}

export default connect(mapStateToProps)(CardContainer)
