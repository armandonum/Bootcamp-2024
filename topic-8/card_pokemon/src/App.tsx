import { useState, useEffect } from 'react'

import { usePokemon, getPokemon, numberPkemon, getPokemonIcone } from './hook/script';

import { Container, Header, Data, Image } from './App.style';

function App() {
  const [count, setCount] = useState(1);


  const { pokemon } = usePokemon(count);

  const getPokemonImage = getPokemon(count);
  const numberPke = numberPkemon(count);


  const typename = pokemon?.types.map((typeInfo: { type: { name: any; }; }) => typeInfo.type.name).join(', ');
  const PokemonType = getPokemonIcone(typename);

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
                <h2 style={{ background: 'orange' }}>{typename}</h2>
                {/* <h2>{pokemon?.types.map(typeInfo => typeInfo.type.name).join(', ')}</h2> */}
                <img src={PokemonType} alt="" /></div>
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
