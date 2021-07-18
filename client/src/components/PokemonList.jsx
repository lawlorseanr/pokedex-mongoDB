import React from 'react';
import _ from 'lodash';
import Pokemon from './Pokemon.jsx';

export default ({ pokemonList }) => {
  return (
    <div>
      {_.map(pokemonList, (pokemon, i) => {
        return <Pokemon key={i} pokemon={pokemon}/>
      })}
    </div>
  )
}