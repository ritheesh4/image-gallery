import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component';
import axios from 'axios';



class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/users')
			.then(res => {
				const persons = res.data;
				console.log(persons[0]);
			})
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={HomePage} />
				</Switch>
			</div>
		)
	}
}

export default App
