import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Clock from './Clock';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2018',
			new_deadline: '',
		}
	}

	changeDeadline() {
		console.log('state', this.state)
		this.setState({ deadline: this.state.new_deadline })
	}

	render() {
		return (
			<div className="App">
				<Form inline>
					<div className="App-title">Count {this.state.deadline} </div>
					<div>
						<Clock
							deadline={this.state.deadline}
						/>
					</div>
					
					<FormControl
                        className="Deadline-input"
						onChange={event => this.setState({ new_deadline: event.target.value })}
						placeholder="new date" />
					<Button onClick={() => this.changeDeadline()}>
						Submit
					</Button>
				</Form>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
				  </p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
				  </a>
				</header>
			</div>
		);
	}
}

export default App;
