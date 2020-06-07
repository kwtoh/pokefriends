import React, { Component } from 'react';

class Card extends Component {


onClick = (event) => {
	// Play pokemon cries
}

render() {
	return (
		<button className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' onclick={this.onClick}>
			<img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} />
			<div>
				<h2>{this.props.name}</h2>
			</div>
		</button>
	); 
}

}

export default Card;