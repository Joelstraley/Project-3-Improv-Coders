const router = require("express").Router();
const passport = require("passport");
const passportConfig = require("../passport");
const usersController = require("../../controllers/usersController");
const JWT = require("jsonwebtoken");
const User = require("../models/users");

// Matches with "/api/shows"
// router.route("/users")
//   .get(usersController.findAll)  
//   .post(usersController.create);
// router.route("/login")
//   // .get(usersController.findById)
//   .post(usersController.login);

// router.route("/signUp")
//   .post(usersController.signup)
router.post("/signUp",(req,res)=>{
  const { email, password } = req.body;
  User.findOne({email}, (err,user)=>{
    if(err)
      res.status(500).json({message: {msgBody: "error", msgError: true}});
    if(user)
      res.status(400).json({message: {msgBody: "Email already used", msgError: true}});
    else{
      const newUser= new User({email, password})
      newUser.save(err=>{
        if(err)
          res.status(500).json({message: {msgBody: "Error", msgError: true}});
        else{
          res.status(201).json({message: {msgBody: "Account Successfully Created", msgError: false}});
        }

      })

    }
  })

})
module.exports = router;
//   .post(usersController.signup)

// // Matches with "/api/books/:id"
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

