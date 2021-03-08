//==============Lib================
import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
//==============Components===================
import Menu from "./components/Menu/Menu";
import Pokemons from "./components/PokemonsPage/Pokemons";
import Pokemon from "./components/Pokemon/Pokemon";
import NotFound from "./components/App/NotFound";
import {useDispatch} from "react-redux";
import {fetchPokemonList} from "./redux/actions";
import Loader from "./components/App/Loader";


const App = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemonList());
    }, []);
    return(
      <div className="wrapper">
        <Route path="/" component={Menu}/>
        <Switch>
            <Route exact path="/" component={Pokemons}/>
            <Route path="/pokemon/:id" component={Pokemon}/>
            <Route component={NotFound}/>
        </Switch>
        <Loader/>
      </div>
    )
}

export default App;
