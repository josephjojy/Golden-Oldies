import React, {Component} from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
		this.onSearchChange = this.onSearchChange.bind(this);
	}

    onSearchChange = (data) => {
        this.setState({search: data});
    }
	render() {
		return (
			<div className="App">
			<Header search={this.state.search} onSearchChange={this.onSearchChange} />
			</div>
		);
	}
}

export default App;
