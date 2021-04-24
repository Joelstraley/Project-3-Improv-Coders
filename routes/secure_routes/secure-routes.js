const express = require('express');
const router = express.Router();
const User= require("../../models/user")
const showController = require("../../controllers/showsController");

router.get(
  '/profile',
  (req, res, next) => {
    User.findOne({ email: req.user.email}).populate('shows').then(({shows}) => {
      console.log("Populated User " + shows);

      res.json({
        message: 'You made it to the secure route',
        user: req.user,
        userShows: shows,
        token: req.query.secret_token,
        userData: "User Data Here"
      })
    }).catch(err => {
      res.json(err);
    });
    
  }
);


// Matches with "/secure/createshow"
router.route("/createshow") 
  .post(showController.create)

router.delete(
  "/logout",
  
  
)

module.exports = router;