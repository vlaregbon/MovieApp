import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Movie extends Component {
  state = {
    movie: [],
    movieName: "",
    nominations: "",
    releaseYear: "",
    director: ""
  };

  componentDidMount() {
    this.loadMovie();
  }
  loadMovie = () => {
    API.getMovie()
      .then(res => {
        console.log(res.data);
        this.setState({
          movie: res.data,
          movieName: "",
          nominations: "",
          releaseYear: "",
          director: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.movie.length ? (
          <div class="row">
            {this.state.movie.map(movie => (
              <div className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card" key={movie.id}>
                <img
                  className="card-img"
                  src="http://via.placeholder.com/350x350"
                />
                <div className="card-title">{movie.movieName}</div>
                <div className="card-text">
                  {movie.nominations},
                  {movie.releaseYear},
                  {movie.director}
                </div>
              </div>
              </div>
            ))}
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Movie;
