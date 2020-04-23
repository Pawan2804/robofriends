import React from 'react';

const Scroll =(props) =>{
	return(
	<div className="ba bw3 b--lightest-blue" style={{overflowY: 'scroll',height: '800px'}}>
	 {props.children}
	</div>);
};
export default Scroll;