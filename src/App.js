import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomeScreen from "./HomeScreen";
import MovieDetails from "./MovieDetails";
import SearchItem from "./SearchItem";

import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav/>
        {/* <HomeScreen /> */}
        <Switch>
          <Route path="/movie_details/:id">
          <MovieDetails />
          </Route>
          <Route path="/search/:keyword">
          <SearchItem />
          </Route>
          <Route path="/">
            <HomeScreen/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
