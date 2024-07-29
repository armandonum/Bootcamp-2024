import { useState, useEffect } from 'react'

import { usePokemon, getPokemon } from './hook/script';

function App() {
  const [count, setCount] = useState(1);


  const pokemon= usePokemon(count);

  const getPokemonImage = getPokemon(count);



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
      }}>


      <div style={
        {
          display: 'flex',
          border: '3px solid black',
          background: 'red'

        }
      }>
        <div>
          <div>
            number and name
            <h2>Count: {count} </h2>
            <h2>{pokemon.pokemon}</h2>
          </div>

          <div>type</div>

        </div>

        <div>
          <button onClick={() => setCount((count) => count + 1)}>Increment</button>
          <img src={getPokemonImage} alt="Pokemon" />
        </div>


      </div>
    </div>
  )
}

export default App
