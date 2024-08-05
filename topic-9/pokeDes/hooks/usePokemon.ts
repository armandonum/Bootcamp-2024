import { useEffect, useState } from "react";

const LIMIT = 25;

const getUrl = (limit: number = 25, offset = 0) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;


type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: string[];
};

async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


async function fetchPokemonDetails(pokemonUrl: string) {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
  return {
    id: data.id,
    types: data.types.map((typeInfo: any) => typeInfo.type.name),
  };
}

export function usePokemon(offset: number = 0) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchAllPokemons = async () => {
      setLoading(true);
      const url = getUrl(LIMIT, offset);
      const data = await fetchData(url);

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: { name: string; url: string }) => {
          const details = await fetchPokemonDetails(pokemon.url);
          return {
            name: pokemon.name,
            url: pokemon.url,
            ...details,
          };
        })
      );

      setPokemons((old) => [...old, ...detailedPokemons]);
      setLoading(false);
    };

    fetchAllPokemons().catch(console.error);
  }, [offset]);

  return { pokemons, loading };
}
