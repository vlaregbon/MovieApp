'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('directors', [
      {
        "directorName": "Guilermo Del Toro",
        "nominations": 8,
        "releaseYear": "2017",
        "movieName": "The Shape of water"
      },
      {
        "directorName": "Christopher Nolan",
        "nominations": 4,
        "releaseYear": "2017",
        "movieName": "Dunkirk"
      },
      {
        "directorName": "Martin McDonagh",
        "nominations": 7,
        "releaseYear": "2017",
        "movieName": "Three Billboards "
      },
      {
        "directorName": "Luca Guadagnino",
        "nominations": 3,
        "releaseYear": "2017",
        "movieName": "Call me by your name"
      },
      {
        "directorName": "Joe Wright",
        "nominations": 3,
        "releaseYear": "2017",
        "movieName": "Darkest Hour"
      },
      {
        "directorName": "Steven Speilberg",
        "nominations": 6,
        "releaseYear": "2017",
        "movieName": "The Post"
      },
      {
        "directorName": "Jordan Peele",
        "nominations": 7,
        "releaseYear": "2017",
        "movieName": "Get Out"
      },
      {
        "directorName": "Greta Gerwig",
        "nominations": 7,
        "releaseYear": "2017",
        "movieName": "Lady Bird"
      },
      {
        "directorName": "Sean Baker",
        "nominations": 0,
        "releaseYear": "2017",
        "movieName": "The Florida Project"
      },
      {
        "directorName": "Ridley Scott",
        "nominations": 1,
        "releaseYear": "2017",
        "movieName": "All the Money"
      },
      {
        "directorName": "Craig Gillespie",
        "nominations": 3,
        "releaseYear": "2017",
        "movieName": "I, Tonya"
      },
      {
        "directorName": "Paul Thomas Anderson",
        "nominations": 2,
        "releaseYear": "2017",
        "movieName": "Phantom Thread"
      },
      {
        "directorName": "Emily Gordon/Kumail Nanjiani",
        "nominations": 2,
        "releaseYear": "2017",
        "movieName": "The Big sick"
      },
      {
        "directorName": "Aaron Sorkin",
        "nominations": 3,
        "releaseYear": "2017",
        "movieName": "Mollys Game"
      }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('directors', null, {});
  }
};