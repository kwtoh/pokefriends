import React from 'react';

const Card = ({ name, id }) => {
	return (
		<button className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
			<div>
				<h2>{name}</h2>
			</div>
		</button>
	);
}

export default Card;