'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('actors', [
      {
        "actorName": "Gary Oldman",
        "nominations": 5,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "Darkest Hour"
      },
      {
        "actorName": "Daniel Day-Lewis",
        "nominations": 4,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "Phantom Thread"
      },
      {
        "actorName": "Timothee Chalamet",
        "nominations": 6,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "Call me by your Name"
      },
      {
        "actorName": "Tom Hanks",
        "nominations": 2,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "The Post"
      },
      {
        "actorName": "Daniel Kaluuya",
        "nominations": 6,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "Get Out"
      },
      {
        "actorName": "Denzel Washington",
        "nominations": 3,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "Roman J Israel"
      },
      {
        "actorName": "Willem Dafoe",
        "nominations": 5,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "The Florida Project"
      },
      {
        "actorName": "Sam Rockwell",
        "nominations": 6,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Three Billboards"
      },
      {
        "actorName": "Michael Stuhlbarg",
        "nominations": 1,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Call me by your Name"
      },
      {
        "actorName": "Armie Hammer",
        "nominations": 3,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Call me by your Name"
      },
      {
        "actorName": "Hugh Jackman",
        "nominations": 1,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "The Greatest Showman"
      },
      {
        "actorName": "Christopher Plummer",
        "nominations": 3,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "All the money in the world"
      },
      {
        "actorName": "James Franco",
        "nominations": 5,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "The Disaster Artist"
      },
      {
        "actorName": "Richard Jenkins",
        "nominations": 4,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Shape of water"
      },
      {
        "actorName": "Woody Harrelson",
        "nominations": 3,
        "nominated": "Supporting",
        "releaseYear": "2017",
        "movieName": "Three Billboards"
      },
      {
        "actorName": "Steve Carrell",
        "nominations": 1,
        "nominated": "Actor",
        "releaseYear": "2017",
        "movieName": "Battle of the Sexes"
      }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('actors', null, {});
  }
};