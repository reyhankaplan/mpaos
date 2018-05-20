import React from 'react'

import style from './Input.css'

export default class NumberInput extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			value: this.props.value
		}
	}
	render() {
		return (
			<div className="number-input">
				<label for={this.props.name}>{this.props.content}</label>
				<input 
					type= "number" 
					name= {this.props.name} 
					min= {this.props.min} 
					max= {this.props.max} 
					step= {this.props.step}
					value= {this.state.value}
					defaultValue= {this.props.value}
					placeholder= {this.props.value}
					ref= {ref => {
						this.input = ref
					}}
					onChange= {
						(e) => {
							
							let isValid = this.props.handleChange(this.input.value)

							if(!isValid) {
								console.log(e.target.value)
								alert(`You can only enter values between ${this.props.min} and ${this.props.max}`)
							}else {
								this.setState({value: this.input.value})
							}
						}
					}
				/>
			</div>
		)
	}
}