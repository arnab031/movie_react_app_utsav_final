import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.css";
import HomeScreen from "./HomeScreen";
import MovieDetails from "./MovieDetails";
import SearchItem from "./SearchItem";

import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Nav/>    {/* This is for Nav Bar*/}
        <Switch>
          <Route path="/movie_details/:id">
          <MovieDetails />   {/* This is for Movie Details */ }
          </Route>
          <Route path="/search/:keyword">
          <SearchItem />
          </Route>
          <Route path="/">
            <HomeScreen/> {/* This is our landing page */ }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
