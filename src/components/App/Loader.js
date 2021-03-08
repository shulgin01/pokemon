import React from 'react';
import {useSelector} from "react-redux";
import loaderGif from "../../assets/images/5.gif";
const Loader = function(){
    const loader = useSelector(state => state.app.loader);
    if(!loader){
        return null;
    }
    return (
        <div className="loader-container">
            <div className="loader">
                <img src={loaderGif} alt="Загрузочная гифка"/>
            </div>
        </div>
    );
}

export default Loader;