import React, { Component } from 'react';
import './App.css';
import ListePokemon from './component/ListePokemon'
import { Route, Switch } from "react-router-dom";
import Title from './component/Title';
import Favoris from './component/Favoris'


class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <ListePokemon />

        <Switch>
          
          
          <Route path="/favoris" component={Favoris} />
        </Switch>

      </div>
    )
  }
}

export default App
