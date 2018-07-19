var db = require("../models");
var router = require("express").Router();
var awardController = require ("../controllers/awardController");

router.route("/api/actors")
.get(awardController.findActor);

router.route("/api/actress")
.get(awardController.findActress);

router.route("/api/movie")
.get(awardController.findMovie);
// .post(awardController.create);

// router.route("/:actor")
// .get(awardController.findActor)

module.exports = router;


















// module.exports = function(app) {
//   app.get("/api/articles", function(req, res) {
//     console.log(req.query);

//     axios
//       .get(
//         `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${
//           process.env.nytAPI
//         }`,
//         { params: req.query }
//       )
//       .then(function(dbArticle) {
//         res.json(dbArticle.data);
//       })
//       .catch(function(err) {
//         console.log(err);
//       })
//   });

//   app.post("/api/articles", function(req, res) {
//     db.Article.create({
//       title: req.body.title,
//       date: req.body.date,
//       url: req.body.url
//     }).then(function(dbArticle) {
//       res.json(dbArticle);
//     });
//   });
// };
