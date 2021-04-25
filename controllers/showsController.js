const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Show
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByToday: function(req, res) {
      db.Show
        .find({ date: req.body.date })
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Show
        .findById(req.params.id)
        //// - Could be FindbyDate(date.now())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log(req.body)
      console.log("attempting create show in db")
      db.Show
      .create(req.body)
      .then(dbShow => {
        console.log(dbShow)
        console.log("attempting to add show to the account holder")
          db.User.findOneAndUpdate({ email: req.user.email}, {$push:  {shows: dbShow._id }}, { new: true })
          .then(dbModel => {
            console.log(dbModel)
            console.log("=================")

            res.json(dbModel)
          })
          
        })
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Show
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Show
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  

