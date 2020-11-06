import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import Login from './pages/login/login.component'
import SignUp from './pages/signup/signup.component'
import GuardedRoute from './utils/GuardedRoute'

class App extends React.Component {
	render() {
		const isAutheticated = true
		return (
			<div>
				<Switch>
					<GuardedRoute
						path='/home'
						component={HomePage}
						auth={isAutheticated}
					/>
					<Route exact path='/' component={Login} />
					<Route exact path='/signup' component={SignUp} />
				</Switch>
			</div>
		)
	}
}

export default App
