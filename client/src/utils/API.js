import axios from "axios";

export default {
  // Gets all actors
  getActors: function() {
    return axios.get("/api/actors");
  },
  // Gets all actress
  getActress: function() {
    return axios.get("/api/actress");
  },
   // Gets all movie
   getMovie: function() {
    return axios.get("/api/movie");
  },

  // movieSearch
  getMovieSearch: function(query){
    return axios.get("/api/movieSearch", {params:query})
  },
};