import { useState, useEffect } from 'react'

import { usePokemon, getPokemon,numberPkemon , getPokemonIcone} from './hook/script';

function App() {
  const [count, setCount] = useState(1);


  const {pokemon}= usePokemon(count);

  const getPokemonImage = getPokemon(count);
  const numberPke= numberPkemon(count);


const typename= pokemon?.types.map((typeInfo: { type: { name: any; }; }) => typeInfo.type.name).join(', ');
const PokemonType=getPokemonIcone(typename);

const handleClick = () => {
  const newPokemon = Math.floor(Math.random()*100)+1;
       setCount (newPokemon);
  
    }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'orange',
        font: '150% sans-serif',
       
      }}>


      <div style={
        {
          display: 'flex',
         
          background: 'red',
          padding: '10px',
          margin: '20px',
          borderRadius: '2rem',
          boxShadow: '0 0 10px rgba(0,0,0,5)',

        }
      }>
        <div
       >
          <div
           style={
            {
          
              
            margin: '20px',
            }
          }
          >
       
            <h2># {numberPke} </h2>
            <h2>{pokemon?.name}</h2>
            
           

          </div>

          <div> 
            <h2>{typename}</h2>
            {/* <h2>{pokemon?.types.map(typeInfo => typeInfo.type.name).join(', ')}</h2> */}
           <img src={PokemonType} alt="" /></div>

        </div>

        <div
         style={
          {
            display: 'flex',
          
            padding: '10px',
          margin: '20px',
          }
        }>
          
          <img src={getPokemonImage} alt="Pokemon" />
        </div>
       

      </div>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App
