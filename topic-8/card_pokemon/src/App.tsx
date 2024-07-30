import { useState, useEffect } from 'react'

import { usePokemon, getPokemon, numberPkemon, getPokemonIcone } from './hook/script';

import { Container, Header, Data, Image } from './App.style';

function App() {
  const colours:{[key:string]:string;}= {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };
  const [count, setCount] = useState(1);


  const { pokemon } = usePokemon(count);

  const getPokemonImage = getPokemon(count);
  const numberPke = numberPkemon(count);


  const typename = pokemon?.types.map((typeInfo: { type: { name: any; }; }) => typeInfo.type.name).join(', ');
  const PokemonTypeBackgroud = colours[typename];

  const handleClick = () => {
    const newPokemon = Math.floor(Math.random() * 100) + 1;
    setCount(newPokemon);

  }

  return (
    <>
      <Container>
        <Header>
          <Data>

            <div >
              <div >
                <h2># {numberPke} </h2>
                <h2>{pokemon?.name}</h2>
              </div>
              <div>
                <h2 style={{ background: `${PokemonTypeBackgroud}` }}>{typename}</h2>
                {/* <h2>{pokemon?.types.map(typeInfo => typeInfo.type.name).join(', ')}</h2> */}
                <img src={PokemonTypeBackgroud} alt="" /></div>
            </div>
          </Data>
          <Image>
            <img src={getPokemonImage} alt="Pokemon" />
          </Image>
        </Header>
        <button onClick={handleClick}>Increment</button>

      </Container>

    </>

  )
}

export default App
