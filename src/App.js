import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import Login from './pages/login/login.component'
import SignUp from './pages/signup/signup.component'
// import axios from 'axios'
// import { loadImages } from './redux/image-actions/image.reducer'

class App extends React.Component {
	componentDidMount() {
		// axios.get('http://localhost:3000/users').then((res) => {
		// 	const persons = res.data
		// 	console.log(persons[0])
		// })
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={SignUp} />
				</Switch>
			</div>
		)
	}
}

export default App
