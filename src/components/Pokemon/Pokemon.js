//==============Lib===============================
import React, {useState, useMemo, useEffect} from 'react';
import Slider from 'react-slick'
import {useDispatch, useSelector} from "react-redux";
//==============Style=============================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//================Redux==========================
import {fetchOnePokemon, hideMenu} from "../../redux/actions";
//===============Components=======================
import Property from "./Property";

const Pokemon = props => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon.pokemonCurrent);
    const menu = useSelector(state => state.app.menu);

    const [pokemonPage, setPokemonPage] = useState({id: 0});

    useEffect(() => {
        dispatch(fetchOnePokemon(pokemonPage.id));
    }, [pokemonPage]);

    useMemo(() => {
        if (menu) dispatch(hideMenu());
        if(props.location.pathname.includes('/pokemon/')){
            setPokemonPage({
                ...pokemonPage,
                id: props.match.params.id
            })
        }
    }, [props.match.params.id]);

    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
        <section className="pokemon">
            <div className="container">
                <div className="pokemon__main">
                    {
                        pokemon.sprites !== undefined &&(
                            <Slider className="pokemon__slider" {...settings}>
                                <div className="slider__item">
                                    <img src={pokemon.sprites.front_default} alt="" className="slider__img"/>
                                </div>
                                <div className="slider__item">
                                    <img src={pokemon.sprites.back_default} alt="" className="slider__img"/>
                                </div>
                            </Slider>
                        )
                    }
                    <div className="pokemon__info">
                        <h1 className="pokemon__title">
                            {pokemon.name}
                        </h1>
                        <div className="pokemon__params">
                            <span className="pokemon__params-title">Характеристики</span>
                            {
                                pokemon.stats !== undefined && (
                                    pokemon.stats.map(stat => <Property key={stat.stat.url} property={stat.stat.name} value={stat.base_stat} />)
                                )
                            }
                        </div>
                        <div className="pokemon__params">
                            <span className="pokemon__params-title">Способности</span>
                            {
                                pokemon.abilities !== undefined && (
                                    pokemon.abilities.map(abil => <Property key={abil.slot} property={abil.ability.name} value={abil.slot} />)
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pokemon;