import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			max: 0,
			count: 0,
			searchfield: '',
			pokemons: [],
		}
	}

	componentDidMount() {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
			.then(response => response.json())
			.then(({count, results}) => {
				this.setState({
					max: count,
					count : count + results.length,
					pokemons : results
				 });
			})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })

	}

	render() {
		const { count, pokemons , searchfield } = this.state;
		if (!count) {
			return (
				<div className='tc'>
					<h1>Loading</h1>
				</div>
				);
		}

		const filteredPokemons= pokemons.filter(pokemon => {
			return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return (
			<div className = 'tc'>
				<h1 className='f1'>Pokedex</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList pokemons={filteredPokemons} />
				</Scroll>
			</div>
		);		
	}
}

export default App;