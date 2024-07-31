import React, { useState } from 'react';
import { usePokemon, getPokemon, numberPkemon } from './hook/script';
import { Container, Header, Data, Image, Type, TypeText } from './components/App.style';
import {icons} from './components/Icon';
import logo from './assets/logo.png';
import {colours} from './components/colors';

import pokeimg from './assets/icon/normal.svg';

function App() {


  const [count, setCount] = useState(1);
  const { pokemon } = usePokemon(count);
  const getPokemonImage = getPokemon(count);
  const numberPke = numberPkemon(count);
  const types = pokemon?.types || [];

  const handleClick = () => {
    const newPokemon = Math.floor(Math.random() * 100) + 1;
    setCount(newPokemon);
  };

  return (
    <>
      <Container>
     <img src={logo} alt="Pokemon" style={{width:'50%'}}/>
     
        <Header
          style={{
            background: types.length > 1 ? colours[types[0].type.name] : colours[types[0]?.type.name] || 'black',
          }}
        >
          <Data>
            <div>
              <div>
                <h2># {numberPke} </h2>
                <h2>{pokemon?.name}</h2>
              </div>
              <Type>
                {types.map((typeInfo: { type: { name: string } }) => (
                  
                  <TypeText
                    bgColor={colours[typeInfo.type.name]}  >
                    <img src={icons[typeInfo.type.name]} alt="nadad" />
                     {typeInfo.type.name}
                  </TypeText>
                  
                ))}
              </Type>
            </div>
          </Data>
          <Image>
        
            <img src={getPokemonImage} alt="Pokemon" />
          </Image>
        </Header>
        <button onClick={handleClick}>other Pokemon</button>
      </Container>
    </>
  );
}

export default App;
