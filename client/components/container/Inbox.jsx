import React from 'react'
import NumberInput from '../presentational/NumberInput.jsx'
import TextInput from '../presentational/TextInput.jsx'
import style from './Inbox.css'

export default class Inbox extends React.Component {

	render() {
		return (
			<div className="inbox">
				<div className="number-inputs">
					<NumberInput 
						name= "step"
						value= "0.001"
						content= "Step Size"
						min= "0.0001"
						max= "0.1"
						step= "0.0001"
						/>
					<NumberInput 
						name= "iter"
						value= "1000"
						content= "Iter Count"
						min= "100"
						max= "1000"
						step= "10"
						/>
				</div>
				<TextInput 
					name= "search"
					content= "Enter person id or name..."
				/>
			</div>
		)
	}
}