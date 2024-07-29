import { useEffect, useState } from "react";

const url= 'https://pokeapi.co/api/v2/pokemon/';

function userTimer()
{        
    const [secconds, setSecconds] = useState(0)

    useEffect(() => {
        const intervals = setInterval(() => {
            setSecconds(count => count + 10 );
            
           
            
        }, 1000);
        return () => {
          
            clearInterval(intervals);
        };
    }, []);
        return {secconds};
    }

    
    function getData( id: number)
    {
        return fetch(url+id)
        .then(response => response.json())
        .then(data => data)
    }

    function usePokemon(id: number): { pokemon: any }
    {
        const [pokemon, setPokemon] = useState(null);
        useEffect   (() => {
            getData(id).then(pokemon => setPokemon(pokemon));
            console.log(pokemon);
    
        }, [id]);
        return {pokemon}; 
    
    
    }

    function getPokemon(id: number) {
        const realId = `00${id}`.slice(-3);
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
      }
      

export {usePokemon, userTimer ,getPokemon} ;