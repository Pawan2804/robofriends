import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox'
import './App.css'

class App extends React.Component {
		constructor(){
			super()
			 this.state={
			robots: robots,
			searchfield:''
			}
		}
	 onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value});
		
		
	}
	render(){
		const fr=this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return  (
		<div className="tc">
		<h1> Robo Friends </h1>
		<SearchBox search={this.onSearchChange}/>
		<CardList robots={fr}/>
		</div>
		);
}
}
export default App;