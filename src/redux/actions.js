import {FETCH_LIST_POKEMON, FETCH_POKEMON, HIDE_LOADER, HIDE_MENU, SHOW_LOADER, SHOW_MENU} from "./types";

export function fetchPokemonList() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            let list = [];
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
            const data = await response.json();
            for (const pokemon of data.results) {
                const responsePokemon = await dispatch(fetchPokemon(pokemon.url));
                list = [
                    ...list,
                    responsePokemon
                ]
            }
            dispatch(hideLoader());
            dispatch({
                type: FETCH_LIST_POKEMON,
                payload: list
            })
        } catch (e) {
            console.log(e)
        }
    }
}
function fetchPokemon(url) {
    return async dispatch => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return {
                id: data.id,
                name: data.name,
                sprites: data.sprites
            }
        }catch (e) {
            console.log(e)
        }
    }
}
export function fetchOnePokemon(id) {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            dispatch(hideLoader());
            dispatch({
                type: FETCH_POKEMON,
                payload: data
            })
        }catch (e) {
            console.log(e)
        }
    }
}

export function showLoader() {
    return{
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return{
        type: HIDE_LOADER
    }
}
export function showMenu() {
    return{
        type: SHOW_MENU
    }
}
export function hideMenu() {
    return{
        type: HIDE_MENU
    }
}
