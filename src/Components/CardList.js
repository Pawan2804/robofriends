import React from 'react';
import Card from './Card';



const CardList = ({robots}) =>{
	const robo_array=robots.map((user,i)=>{
		return <Card key={i} 
			id={robots[i].id} 
			name={robots[i].name}
			email={robots[i].email}/>
	});
	return(
		<div>
					{robo_array}
				</div>
		);
}
export default CardList;