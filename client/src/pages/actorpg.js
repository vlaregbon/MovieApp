import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Actors extends Component {
  state = {
    actors: [],
    actorName: "",
    nominations: "",
    nominated: "",
    releaseYear: "",
    movieName: ""
  };

  componentDidMount() {
    this.loadActors();
  }
  loadActors = () => {
    API.getActors()
      .then(res => {
        console.log(res.data);
        this.setState({
          actors: res.data,
          actorName: "",
          nominations: "",
          nominated: "",
          releaseYear: "",
          movieName: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.actors.length ? (
          <ul>
            {this.state.actors.map(actor => (
              <li key={actor.id}>
                {actor.actorName},
                {actor.movieName},
                {actor.releaseYear},
                {actor.nominated},
                {actor.nominations},
              </li>
            ))}
          </ul>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Actors;
