import {FETCH_LIST_POKEMON, FETCH_POKEMON} from "./types";

const initialState = {
    pokemonList: [],
    pokemonCurrent: {}
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_POKEMON:
            return {...state, pokemonList: action.payload};
        case FETCH_POKEMON:
            return {...state, pokemonCurrent: action.payload};
        default: return state;
    }
};