//===========Lib==================
import React from 'react';
import {Link} from "react-router-dom";

const MenuItem = props => {
    return (
        <Link to={`/pokemon/${props.pokemon.id}`} className="menu-item">
            <span className="menu-item__text">
                {
                    props.pokemon.name
                }
            </span>
        </Link>
    );
};

export default MenuItem;