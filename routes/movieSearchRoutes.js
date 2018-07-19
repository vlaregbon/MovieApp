const router = require("express").Router();

const axios = require("axios");

require("dotenv").config()



router

 .route("/movieSearch")

 .get(function (req, res) {

   console.log(req.query);
   
   axios

     .get(`https://www.omdbapi.com/?t=&apikey=${process.env.movieAPI}`, {params: req.query})

     .then(function (movieData) {

       res.json(movieData.data)

     })

     .catch(function(err) {

       console.log(err);

       res.json(err);

     });

 })

module.exports = router;