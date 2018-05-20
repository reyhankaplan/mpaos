import React from 'react'
import Search from './Search.jsx'
import Options from './Options.jsx'
import Result from './Result.jsx'

import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	Switch,
	Redirect } from 'react-router-dom'

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = { status: 1 }
		this.personSelected = this.personSelected.bind(this)
		this.optionsSelected = this.optionsSelected.bind(this)
		this.changeLocation = this.changeLocation.bind(this)
	}

	personSelected(id) {
		this.setState({personId: id, status: 2})
	}

	optionsSelected({iter, step}) {
		console.log(`Iter: ${iter}, step: ${step}`)
		this.setState({iter:iter, step:step, status: 3})
	}

	changeLocation(status) {
		this.setState({status: status})
	}

	render() {

		return (
			<Router>
			<div>
				{
					this.state.status == 1 ?
					(
						<Search personSelected= {this.personSelected}/>
					) :
					(
						this.state.status == 2 ?
						(
							<Options 
								optionsSelected= {this.optionsSelected}
								changeLocation= {this.changeLocation}
							/>
						) :
						(
							<Result 
								personId= {this.state.personId}
								iter= {this.state.iter}
								step= {this.state.step}
								changeLocation= {this.changeLocation}
							/> 
						)
					)
				}
				</div>
			</Router>
		)
	}
}