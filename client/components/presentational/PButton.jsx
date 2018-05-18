import React from 'react'
import style from './PButton.css'

export default class PButton extends React.Component {

	render() {
		return (
			<button class="pbutton">
				<span> {this.props.pname} </span>
				<small> {this.props.pid} </small>
			</button>
		)
	}
}