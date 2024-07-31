import React, { useState } from 'react';
import { usePokemon, getPokemon, numberPkemon } from './hook/script';
import { Container, Header, Data, Image, Type, TypeText } from './components/App.style';
import { icons } from './components/Icon';
import logo from './assets/logo.png';
import { colours } from './components/colors';

import Modal from './components/modal';


function App() {


  const [count, setCount] = useState(1);
  const { pokemon } = usePokemon(count);
  const getPokemonImage = getPokemon(count);
  const numberPke = numberPkemon(count);


  // const descripon = getDescriptions(25);
  const types = pokemon?.types || [];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    const newPokemon = Math.floor(Math.random() * 100) + 1;
    setCount(newPokemon);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  return (
    <>
      <Container>
        <img src={logo} alt="Pokemon" style={{ width: '50%' }} />

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
          <Image onClick={handleOpenModal}>

            <img src={getPokemonImage} alt="Pokemon" />
          </Image>
        </Header>
        <button onClick={handleClick}>other Pokemon</button>

      </Container>

      <Modal show={isModalOpen} onClose={handleCloseModal} name={types[0]?.type.name}>
        <div className='hearder'>
          <h2 ># {numberPke}</h2>
          <h3 onClick={handleCloseModal}>X</h3>

        </div>
        <div className='name'>
        <h2>{pokemon?.name}</h2>
        </div> 
<div className="image">
<img src={getPokemonImage} alt="Pokemon" style={{  width: '60%', }} />

</div>

<div className="description">
<p>{}</p>

</div>

        <div className="type">

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

        <div className="habilities" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px',
        }}>
          <table border={1}  style={{
            width: '100%',
            textAlign: 'center',
            borderCollapse: 'collapse',
          }}>
            <tr>
              <th>Abilities</th>
            </tr>
            {pokemon?.abilities.map((ability: { ability: { name: string } }) => (
              <tr>
                <td>{ability.ability.name}</td>
              </tr>
            ))}
          </table>
        </div>
       
       
      </Modal>
    </>
  );
}

export default App;
