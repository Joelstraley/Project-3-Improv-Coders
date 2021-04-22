const path = require("path");
const db = require("../models");
const apiRoutes = require("./api");
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = require("express").Router();


router.get("/", (req, res)=>{
  res.send("Hello World")
})
// API Routes
router.use("/api", apiRoutes);

//SignUp and Register Authentication Routes
// router.post(
//   '/signupPassport',
//   passport.authenticate('signup', { session: false }),
//   async (req, res, next) => {
//     res.json({
//       message: 'Signup successful',
//       user: req.user
//     });
//   }
// );

// router.post(
//   '/loginPassport',
//   async (req, res, next) => {
//     passport.authenticate(
//       'login',
//       async (err, user, info) => {
//         try {
//           if (err || !user) {
//             const error = new Error('An error occurred.');
//             console.log(info.message)
//             return next(error);
//           }

//           req.login(
//             user,
//             { session: false },
//             async (error) => {
//               if (error) return next(error);

//               const body = { _id: user._id, email: user.email };
//               const token = jwt.sign({ user: body }, 'TOP_SECRET');

//               return res.json({ token });
//             }
//           );
//         } catch (error) {
//           return next(error);
//         }
//       }
//     )(req, res, next);
//   }
// );


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
