import React from 'react'
import style from './Input.css'

export default class TextInput extends React.Component {
	render() {
		return (
			<div className="text-input">
				<label for={this.props.name}>{this.props.content}</label>
				<input 
					type= "text"
					maxlength= "20" 
					name= {this.props.name}
					placeholder= {this.props.content}
				/>
			</div>
		)
	}
}