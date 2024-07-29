
import { useState,useEffect } from "react";

const url = "https://pokeapi.co/api/v2/pokemon/"

const typeUrl= "https://pokeapi.co/api/v2/type/"

function getData( id: number)
{
    return fetch(url+id)
    .then(response => response.json())
    .then(data => data)
}


function getPokemonTypeData() {
    return fetch(typeUrl)
        .then(response => response.json())
        .then(data => data);
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

function getPokemon(id:any)
{
    const realId = `00${id}`.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
}


function getPokemonIcone(id:any)

{
    const type= `${id}.svg`;
    
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${type}`;
}
function numberPkemon(id:number)
{
    const realId = `00${id}`.slice(-3);
    return realId;

}

export  {usePokemon,getPokemon, numberPkemon, getPokemonIcone, getPokemonTypeData};