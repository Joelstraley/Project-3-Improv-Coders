const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.User
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      console.log("hello");
      // db.User
      //   .findById(req.params.id)
      //   .then(dbModel => res.json(dbModel))
      //   .catch(err => res.status(422).json(err));
    },
    // thie purpose of this function will log a person in
    login: function(req, res){
      console.log(req.body.email)
      db.User.findOne({email: req.body.email})
        .then(async dbUser => {
          console.log(dbUser.password)
          console.log(req.body.password)
          var confirm= await dbUser.validatePassword(req.body.password)
          console.log("++++++++++++++++++")
          console.log(confirm)
          if (confirm) {
            console.log("Correct Password!")
            res.status(200).send("Password Correct");

          }else{
            console.log("Incorrect Password")
            res.status(401).send("Incorrect Password");
          }

        })
        .catch(err => {
          res.status(422).json(err);
        });


      
    },

    signup: function(req, res) {
      console.log("===========================")
      console.log(req.body)
      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };