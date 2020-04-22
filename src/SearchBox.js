import React from 'react';

const SearchBox = ({search})=> {
	return (
		<div className="tc">
		<input className="pa3 ba b--green bg-lightest-blue" type='search' placeholder='search robots'
		onChange={search}/>
		</div>
		);
}
export default SearchBox;
