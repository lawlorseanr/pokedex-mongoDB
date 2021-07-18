import React from 'react';
import PokemonList from './PokemonList.jsx';
import PokeDropdown from './PokeDropdown.jsx';
import axios from 'axios';

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

  componentDidMount() {
    axios.get('http://localhost:8000/api/pokemon')
      .then(response => {
        this.setState({ pokemon: response.data })
      })
      .catch(err => console.error(err));
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