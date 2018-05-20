import React from 'react'
import TextInput from '../presentational/TextInput.jsx'
import PButton from '../presentational/PButton.jsx'
import style from './containers.css'

export default class Search extends React.Component {

	constructor(props) {

		super(props)

		this.state = {isLoaded: false, people: null, message: null}

		this.fetchPeople = this.fetchPeople.bind(this)
	}

	fetchPeople(word) {

		fetch(`http://localhost:3000/person?name=${word}&id=${word}`)
			.then(res => res.json())
			.then(
				(result) => {

					console.log(Array.isArray(result))
		        	if(Array.isArray(result))
					
						this.setState({
							isLoaded: true,
							message: null,
							people: result
						});

					else 
						this.setState({
							isLoaded: true,
							people: null,
							message: result
						});
					console.log(this.state.people)
	        },
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
	}

	render() {
		return (
			<div className="search">
				<TextInput 
					name= "search"
					content= "Enter person id or name..."
					fetchPeople= {this.fetchPeople}
				/>
				<div className="search-results">
				{

					this.state.people?(

						this.state.people.map(e => {

							return (
								<PButton
									pname={e.name}
									pid={e.id}
									selectPerson= {this.props.personSelected}  
								/>
							)
						})

					): (

						this.state.message?(
							<PButton
								pname="No one found"
								pid="x"
								selectPerson= {() => {
									console.log('nothing changed')
								}}  
							/>
						):false

					)
				}
					
				</div>

			</div>
		)
	}
}
