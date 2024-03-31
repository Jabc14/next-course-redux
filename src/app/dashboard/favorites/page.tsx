import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
    title: 'Favoritos',
    description: "Pokemon favoritos"
}

export default async function PokemonsPage() {


  return (
    <div className='flex flex-col'>

        <span className='text-5xl my-2'>Pokemon Favoritos</span>

    <PokemonGrid pokemons={ [] }/>
       
    </div>

  );
}