import {HIDE_LOADER, HIDE_MENU, SHOW_LOADER, SHOW_MENU} from "./types";


const initialState = {
    loader: false,
    menu: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loader: true};
        case HIDE_LOADER:
            return {...state, loader: false};
        case SHOW_MENU:
            return {...state, menu: true};
        case HIDE_MENU:
            return {...state, menu: false};
        default: return state
    }
};