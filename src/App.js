import React, { useState, useEffect } from 'react';
import PokemonList from './models/mock-pokemon'
import pokemonTitle from './pokemon.png';

const App = () =>  {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon(PokemonList);
  }, []);

  return (
    <div>
      <img id="pokemon-title" src={pokemonTitle} alt="pokemon-title"/>
      <div className="container">
        <div className="row">
          {pokemon.map(({id, name, picture, hp, cp, types}) => (
            <div className="col s12 m4" key={id}>
              <div className="card horizontal">
                <div className="card-image">
                  <img src={picture} alt={name}/>
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{name}</p>
                    <p><small>PV :{hp}</small></p>
                    <p><small>PA : {cp}</small></p>
                    
                  </div>
                  <p text-align="center"><small>Type : {types}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  );
}

export default App;
