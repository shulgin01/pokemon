import React from 'react';
import {Link} from "react-router-dom";

const PokemonPrev = props => {
    return (
        <div className="pokemon-prev">
            <Link to={`/pokemon/${props.pokemon.id}`} className="pokemon-prev__header">
                <img src={props.pokemon.sprites.front_default} alt="" className="pokemon-prev__img"/>
            </Link>
            <div className="pokemon-prev__body">
                <Link to={`/pokemon/${props.pokemon.id}`} className="pokemon-prev__title">
                    <span className="pokemon-prev__name">
                        {props.pokemon.name}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default PokemonPrev;