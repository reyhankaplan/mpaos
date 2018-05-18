import React from 'react'
import style from './App.css'
import Inbox from './Inbox.jsx'
import Outbox from './Outbox.jsx'

export default class App extends React.Component {

	render() {
		return (
			<div>
				<header>
					<h1>Hello!</h1>
				</header>
				<section>
					<Inbox />
					<Outbox />
				</section>
				<footer></footer>
			</div>
		)
	}
}