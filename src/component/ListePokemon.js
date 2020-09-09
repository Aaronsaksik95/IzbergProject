import React from 'react';
import axios from 'axios';
import './Pokemon.css';
import Pokemon from './Pokemon'
import {
    BrowserRouter as
        Router,
    Switch,
    Route
} from "react-router-dom";

function TestStorage() {
    if (localStorage.getItem('favoris') == null) {
        return null
    }
    else {
        return (
            <a className="" href="/favoris"><h4 className="border p-4 m-1 rounded bg-danger">Favoris</h4></a>
        )
    }
}

class ListePokemon extends React.Component {
    state = {
        pokemons: []
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=500`)
            .then(res => {
                const pokemons = res.data.results;
                this.setState({ pokemons });
            })
    }


    render() {
        return (
            <div>

                <div className="ovflw d-flex ml-5 mr-5 mt-5" >
                    <TestStorage />
                    {this.state.pokemons.map(pokemon =>
                        <a href={`/pokemon/${pokemon.name}`}>
                            <h4 className="border p-4 m-1 rounded">{pokemon.name}</h4>
                        </a>)}
                </div>
                <h6 className="text-right mr-5">{this.state.pokemons.length} ➔</h6>
                <h3 className="text-danger text-center"><em>Selectionnez un POKEMON afin de le connaître plus en détail.</em></h3>

                <Router>
                    <Switch>
                        <Route path="/pokemon/:name" component={Pokemon} />
                    </Switch>
                </Router>
            </div>
        )
    }

}

export default ListePokemon
