//============Lib===============
import React from 'react';
import {useSelector} from "react-redux";
//==============Components===============
import PokemonPrev from "./PokemonPrev";

const Pokemons = () => {
    const pokemonList = useSelector(state => state.pokemon.pokemonList);

    return (
        <section className="pokemons">
            <div className="container">
                <div className="pokemons__main">
                    {
                        pokemonList.length > 0 && (
                            pokemonList.map(pokemon => <PokemonPrev key={pokemon.id} pokemon={pokemon}/>)
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Pokemons;