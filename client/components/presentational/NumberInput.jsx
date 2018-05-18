import React from 'react'

import style from './Input.css'

export default class NumberInput extends React.Component {
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
					defaultValue= {this.props.value}
					placeholder= {this.props.value}
				/>
			</div>
		)
	}
}