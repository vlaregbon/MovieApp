import React, { Component } from "react";
import Actorpg from "./pages/actorpg";
import Actresspg from "./pages/actresspg"
import Moviepg from "./pages/moviepg"
import OMDBContainer from "./pages/OMDContainer"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"; 

const App = () => (
  <Router>
      <div>
        <Navbar/>
      <Route exact path="/actor" component={Actorpg} />
      <Route exact path="/actress" component={Actresspg} />
      <Route exact path="/movies" component={Moviepg} />
      <Route exact path="/movieSearch" component ={OMDBContainer}/>
    </div>
  </Router> 

);

export default App;
