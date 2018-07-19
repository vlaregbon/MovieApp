'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('actresses', [
      {
        "actressName": "Allison Janey",
        "nominations": 6,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "I, Tonya"
      },
      {
        "actressName": "Margot Robbie",
        "nominations": 7,
        "nominated": "Actress",
        "releaseYear": "2017",
        "movieName": "I, Tonya"
      },
      {
        "actressName": "Lauri Metcalf",
        "nominations": 6,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Lady Bird"
      },
      {
        "actressName": "Hong Chau",
        "nominations": 3,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Downsizing"
      },
      {
        "actressName": "Lesly Manville",
        "nominations": 2,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Phantom Thread"
      },
      {
        "actressName": "Tiffany Haddish",
        "nominations": 1,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Girls Trip"
      },
      {
        "actressName": "Meryl Streep",
        "nominations": 3,
        "nominated": "Actress",
        "releaseYear": "2017",
        "movieName": "The Post"
      },
      {
        "actressName": "Michelle Williams",
        "nominations": 1,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "The Greatest Showman"
      },
      {
        "actressName": "Saoirse Ronan",
        "nominations": 7,
        "nominated": "Actress",
        "releaseYear": "2017",
        "movieName": "Lady Bird"
      },
      {
        "actressName": "Francis McDormand",
        "nominations": 6,
        "nominated": "Actress",
        "releaseYear": "2017",
        "movieName": "Three Billboards"
      },
      {
        "actressName": "Sally Hawkins",
        "nominations": 10,
        "nominated": "Actress",
        "releaseYear": "2017",
        "movieName": "Shape of Water"
      },
      {
        "actressName": "Mary J Blige",
        "nominations": 3,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Mudbound"
      },
      {
        "actressName": "Octavia Spencer",
        "nominations": 4,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Shape of Water"
      },
      {
        "actressName": "Holly Hunter",
        "nominations": 3,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "The Big Sick"
      },
      {
        "actressName": "Judi Dench",
        "nominations": 2,
        "nominated": "Actress",
        "releaseYear": "2017",
        "movieName": "Victoria and Abdul"
      },
      {
        "actressName": "Jessica Chastain",
        "nominations": 2,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Molly's Game"
      }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('actresses', null, {});
  }
};