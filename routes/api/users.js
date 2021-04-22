const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/shows"
// router.route("/users")
//   .get(usersController.findAll)  
//   .post(usersController.create);

// >>>>>>>>>>>>>>>>>>>>>>>>
// router.route("/login")
//   // .get(usersController.findById)
//   .post(usersController.login);

// router.route("/signUp")
//   .post(usersController.signup)
// >>>>>>>>>>>>>>>>>>>>>>>>>
router.post(
  '/signupPassport',
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
);

router.post(
  '/loginPassport',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');
            console.log(info.message)
            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, 'TOP_SECRET');

              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

router.get(
  '/profile',
  (req, res, next) => {
    console.log("trying to get user profile");
    if(req.query.secret_token){
      res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
      })
    // }else {
    //   res.send("No permission to view");
    // }
  }
}
);







// Matches with "/api/books/:id"
// router
//   .route("/users/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove)

  // .post("/login", (req, res) => {
  //   // console.log(req.body)
  //   db.User.findOne({email: req.body.email})
  //   // db.User.find()
  //   // db.User.create(req.body)
  //   .then(dbUser => {
  //     if (req.body.password === dbUser.password) {
  //       res.send("Password Correct");
  
  //     }else{
  //       res.send("Incorrect Password");
  //     }
  //     // console.log(dbUser);
  //     // res.json(dbUser);
  
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });
  //   // res.send("Login!");
  
  // });




module.exports = router;

