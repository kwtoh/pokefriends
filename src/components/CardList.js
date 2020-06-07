import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
	const cardComponent = pokemons.map((user, i) => {
		let url = pokemons[i].url
		if (url[url.length - 1] === '/') {
			url = url.slice(0, -1)
		}
		const id = parseInt(url.substring(url.lastIndexOf('/')+1))
		return (
			<Card 
				key={id}
				id={id} 
				name={pokemons[i].name.toUpperCase()} 
			/>
		);
	})

	return (
		<div>
			{cardComponent}
		</div>
	);
}

export default CardList;