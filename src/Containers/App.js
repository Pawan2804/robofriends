import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends React.Component {
		constructor(){
			super()
			 this.state={
			robots: [],
			searchfield:''
			}
		}
	 onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value});
		
		
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{return response.json();
		})
		.then(users=>{this.setState({robots: users})
	});
	}

	render(){
		const fr=this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return  (
		<div className="tc">
		<h1> Robo Friends </h1>

		<SearchBox search={this.onSearchChange}/>
		<Scroll>
		<CardList robots={fr}/>
		</Scroll>
		</div>
		);
}
}
export default App;