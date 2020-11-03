import React from 'react'
import './homepage.styles.scss'
import CardsContainer from '../../components/cards-container/cards-container.component'
import PrimarySearchAppBar from '../../components/nav-bar/nav-bar.component'
import { loadImages } from '../../redux/imagesReducer'
import { connect } from 'react-redux'

class HomePage extends React.Component {
	componentDidMount() {
		this.props.dispatch(loadImages())
	}
	render() {
		const { error, loading } = this.props

		if (error) {
			return <div>Error! {error.message}</div>
		}

		if (loading) {
			return <div>Loading...</div>
		}

		return (
			<div className='homepage'>
				<PrimarySearchAppBar />
				<CardsContainer />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	// products: state.products.items,
	// loading: state.products.loading,
	// error: state.products.error,
})

export default connect(mapStateToProps)(HomePage)
