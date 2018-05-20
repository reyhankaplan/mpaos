import React from 'react'
import NumberInput from '../presentational/NumberInput.jsx'
import style from './containers.css'

export default class Options extends React.Component {

	constructor(props) {
		super(props)

		this.values = {step: 0.001, iter: 1000}

		this.changeStep = this.changeStep.bind(this)
		this.changeIter = this.changeIter.bind(this)
	}

	changeStep(step) {
		
		if( step < 0.0001 || step > 0.1 ) 
			return false
		
		this.values.step = step
		return true
	}

	changeIter(iter) {
		
		if( iter < 100 || iter > 1000 ) 
			return false
		
		this.values.iter = iter
		return true
	}

	render() {
		return (
			<div className="options">
				<div className="number-inputs">
					<NumberInput 
						name= "step"
						value= "0.001"
						content= "Step Size"
						min= "0.0001"
						max= "0.1"
						step= "0.0001"
						handleChange= {this.changeStep}
						/>
					<NumberInput 
						name= "iter"
						value= "1000"
						content= "Iter Count"
						min= "100"
						max= "1000"
						step= "10"
						handleChange= {this.changeIter}
						/>
				</div>
				<div className="navigation">
					<button
						onClick= {() => {
							this.props.changeLocation(1)
						}}	
						> 
						Back 
					</button>
					<button
						onClick= {() => {
							this.props.optionsSelected(this.values)
						}}	
						> 
						Calculate 
					</button>
				</div>
			</div>
		)
	}
}