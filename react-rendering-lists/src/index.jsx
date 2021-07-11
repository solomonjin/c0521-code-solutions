import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.pokemonList = props.pokemonList;
  }

  render() {
    return (
      <ul>
        {this.pokemonList.map(pokemon => <li key={pokemon.number}>{pokemon.name}</li>)}
      </ul>
    );
  }
}

ReactDOM.render(
  <PokeList pokemonList={pokedex} />,
  document.querySelector('#root')
);
