//============Lib====================
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
//==========Components================
import MenuItem from "./MenuItem";
//===========Redux=========================
import {hideMenu, showMenu} from "../../redux/actions";

const Menu = () => {
    const dispatch = useDispatch();

    const pokemonList = useSelector(state => state.pokemon.pokemonList);
    const menu = useSelector(state => state.app.menu);

    const menuToggle = () => {
        if (menu) dispatch(hideMenu());
        else dispatch(showMenu());
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    });

    const handleClickOutside = e => {
        let isArea = false;
        if (menu){
            e.path.forEach(el => {
                if(el.className === "menu active"){
                    isArea = true
                }
            })
        }
        if (!isArea){
            dispatch(hideMenu())
        }
    }

    return (
        <div className={(menu)?"menu active":"menu"}>
            <div className={(menu)?"sandwich sandwich-active":"sandwich"} onClick={menuToggle}>
                <div className="sandwich__line sandwich__line--top"></div>
                <div className="sandwich__line sandwich__line--middle"></div>
                <div className="sandwich__line sandwich__line--bottom"></div>
            </div>
            <nav className="menu-list">
                {
                    pokemonList.length > 0 && (
                        pokemonList.map(pokemon => <MenuItem key={pokemon.id} pokemon={pokemon} />)
                    )
                }
            </nav>
        </div>
    );
};

export default Menu;