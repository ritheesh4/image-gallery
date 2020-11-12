import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import Login from './pages/login/login.component'
import SignUp from './pages/signup/signup.component'
import GuardedRoute from './utils/GuardedRoute'
import jwt_decode from 'jwt-decode'
let isAutheticated = false

const checkAuth = () => {
	console.log(process.env)
	if (localStorage.getItem('access_token')) {
		const token = localStorage.getItem('access_token')
		let decodedToken = jwt_decode(token)
		let jwt_exp = decodedToken.exp
		let current_time = new Date().getTime() / 1000
		if (current_time > jwt_exp) {
			isAutheticated = false
		} else {
			isAutheticated = true
		}
	} else {
		isAutheticated = false
	}
}

class App extends React.Component {
	render() {
		checkAuth()
		return (
			<div>
				<Switch>
					<GuardedRoute
						path='/home'
						component={HomePage}
						auth={isAutheticated}
					/>
					<Route exact path='/' component={Login} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={SignUp} />
				</Switch>
			</div>
		)
	}
}

export default App
