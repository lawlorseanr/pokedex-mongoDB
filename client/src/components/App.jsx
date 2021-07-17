import React from 'react';
import PokemonList from './PokemonList.jsx';
import PokeDropdown from './PokeDropdown.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      types: [
        'Grass', 'Fire', 'Water', 'Normal', 'Poison',
        'Electric', 'Ground', 'Fighting', 'Psychic',
        'Rock', 'Ghost', 'Dragon'
      ],
      pokemon: []
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button>Show All</button>
          <PokeDropdown types={this.state.types}/>
          <button>INSERT</button>
          <PokemonList pokemonList={this.state.pokemon}/>
        </div>
      </div>
    );
  }
}

export default App;