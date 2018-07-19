var db = require("../models")

module.exports ={
  findActor: function(req, res){
    console.log("hi")
    db.Actor
    .findAll()
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel)
    })
    .catch(err => {
      console.log(err)
      res.status(422).json(err)
    });
  },

  findActress: function(req, res){
    db.Actresses
    .findAll()
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel)
    })
    .catch(err => {
      console.log(err)
      res.status(422).json(err)
    });
  },

  findMovie: function(req, res){
    db.Movie
    .findAll()
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel)
    })
    .catch(err => {
      console.log(err)
      res.status(422).json(err)
    });
  },

  create: function(req, res) {
    db.Actor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // findActor: function(req, res){
  //   db.Actor
  //     .findActor(req.params.actorName)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


}