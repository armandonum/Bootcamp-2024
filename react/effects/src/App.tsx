import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'


import {usePokemon,userTimer,getPokemon} from './hooks/useTimer'

function App()
{
  const [count,setCount] = useState(1)

 const {secconds} = userTimer();
 const {pokemon} = usePokemon(count);
 const pokemonImage = getPokemon(count);


  useEffect(() => {
   console.log('rendered')
  })
  useEffect(() =>  {
    console.log('run on mount ')
  }, [])

  // useEffect(() => {
  //   const intervals= setInterval(() => {
  //     setCount(count=> count+1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervals)
  //   }
  // },[])

  const handleClick = () => {
const newPokemon = Math.floor(Math.random()*100)+1;
     setCount (newPokemon);

  }

  const timer = `${Math.floor(secconds/60)}:${secconds%60}`



  const revealPokemon = () => {
   
  }

  return (
    <> 
    <h1>{secconds}</h1>
    <h1>{timer }</h1>
    <h1>{pokemon?.name}</h1>


  <div   style={
    {
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
    }
  }>
    <img src={pokemonImage} alt="pokemon"  style={
      {
       opacity: 1, 
      }
    }/>

<div 
style={
  {
    padding: '10px',
    margin: '10px',
  }
}>
<button >reveal the Pokemon</button>

<button 
    onClick={handleClick}> get another Poekemon</button>

</div>
    
  </div>
   
    </>
  )
}


export default App
