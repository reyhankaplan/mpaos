import React from 'react'
import style from './containers.css'

export default class Result extends React.Component {

	constructor(props) {

		super(props)

		this.state = {isLoaded: false, result: null, message: null}

	}

	componentDidMount() {

		console.log(`id: ${this.props.personId}\
			iter: ${this.props.iter} \
			step: ${this.props.step}`)

		console.log('mounted')

		fetch(`http://localhost:3000/hello?id=${this.props.personId}&iter=${this.props.iter}&step=${this.props.step}`)
			.then(res => res.json())
			.then(
				(result) => {

		        	if(!result.message)
					
						this.setState({
							isLoaded: true,
							message: null,
							result: result
						});

					else 
						this.setState({
							isLoaded: true,
							result: null,
							message: result
						});
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
			<div>
				<div className="result">
					<div className="chart">
						<span>f: </span>
						{
							this.state.result?
							this.state.result.f.map((e, i) => {
								console.log(e)
								return (
									<div 
										className={`f${(e > 0) ? 'p' : 'n'}`}
										style={
											{
												height: `${Math.abs(e)*150}px`,
												marginTop: (e > 0) ? (-e*150 + 'px') : 0
											}
										}
										title={`f[${i}] = ${e}`}
									>
									</div>
								)
							}):
							<span>Loading</span>
						}
					</div>
					<div className="suggestions">
					{
						this.state.result?
						this.state.result.suggestions.map(e => {
							return (
								<div className="person">
									<span className="p">{e.p}</span>
									<span>{e.name}</span>
								</div>
							)
						}):
						<span>Loading</span>
					}
					</div>
				</div>
				<div className="navigation">
					<button
						onClick= {() => {
							this.props.changeLocation(2)
						}}	
						> 
						Geri 
					</button>
					<button
						onClick= {() => {
							this.props.changeLocation(1)
						}}	
						> 
						Yeni 
					</button>
				</div>
			</div>
		)
	}
}