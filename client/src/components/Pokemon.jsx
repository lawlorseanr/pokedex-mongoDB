import React from 'react';

export default ({ pokemon }) => {
  return (
    <div data-type={pokemon.type}>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.src}/>
    </div>
  )
}