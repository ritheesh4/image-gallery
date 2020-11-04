import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import Login from './pages/login/login.component'
import SignUp from './pages/signup/signup.component'

class App extends React.Component {
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
