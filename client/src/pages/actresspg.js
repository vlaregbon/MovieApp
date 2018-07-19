import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Actress extends Component {
  state = {
    actress: [],
    actressName: "",
    nominations: "",
    nominated: "",
    releaseYear: "",
    movieName: ""
  };

  componentDidMount() {
    this.loadActress();
  }
  loadActress = () => {
    API.getActress()
      .then(res => {
        console.log(res.data);
        this.setState({
          actress: res.data,
          actressName: "",
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
        {this.state.actress.length ? (
          <ul>
            {this.state.actress.map(actress => (
              <li key={actress.id}>
                {actress.actressName},
                {actress.movieName},
                {actress.releaseYear},
                {actress.nominated},
                {actress.nominations},
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

export default Actress;
