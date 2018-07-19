'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      {
        "movieName": "The Shape of water",
        "nominations": 8,
        "releaseYear": "2017",
        "director": "Guilermo Del Toro"
      },
      {
        "movieName": "Dunkirk",
        "nominations": 5,
        "releaseYear": "2017",
        "director": "Christopher Nolan"
      },
      {
        "movieName": "Three Billboards ",
        "nominations": 11,
        "releaseYear": "2017",
        "director": "Martin McDonagh"
      },
      {
        "movieName": "Call me by your name",
        "nominations": 8,
        "releaseYear": "2017",
        "director": "James Ivory"
      },
      {
        "movieName": "Darkest Hour",
        "nominations": 3,
        "releaseYear": "2017",
        "director": "Joe Wright"
      },
      {
        "movieName": "The Post",
        "nominations": 6,
        "releaseYear": "2017",
        "director": "Steven Speilberg"
      },
      {
        "movieName": "Get Out",
        "nominations": 10,
        "releaseYear": "2017",
        "director": "Jordan Peele"
      },
      {
        "movieName": "Lady Bird",
        "nominations": 12,
        "releaseYear": "2017",
        "director": "Greta Gerwig"
      },
      {
        "movieName": "The Florida Project",
        "nominations": 2,
        "releaseYear": "2017",
        "director": "Sean Baker"
      },
      {
        "movieName": "Mudbound",
        "nominations": 6,
        "releaseYear": "2017",
        "director": "Dee Rees"
      },
      {
        "movieName": "I, tonya",
        "nominations": 3,
        "releaseYear": "2017",
        "director": "Craig Gillespie"
      },
      {
        "movieName": "Phantom thread",
        "nominations": 1,
        "releaseYear": "2017",
        "director": "Paul Thomas Anderson"
      },
      {
        "movieName": "The big sick",
        "nominations": 5,
        "releaseYear": "2017",
        "director": "Emily Gordon/Kumail Nanjiani"
      },
      {
        "movieName": "Mollys Game",
        "nominations": 3,
        "releaseYear": "2017",
        "director": "Aaron Sorkin"
      },
      {
        "movieName": "The disaster Artist",
        "nominations": 3,
        "releaseYear": "2017",
        "director": "James Franco"
      },
      {
        "movieName": "Logan",
        "nominations": 1,
        "releaseYear": "2017",
        "director": "James Mangold"
      }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};