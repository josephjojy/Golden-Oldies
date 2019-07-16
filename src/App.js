import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import SongList from './SongList';

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
			<SongList/>
			</div>
		);
	}
}

export default App;
