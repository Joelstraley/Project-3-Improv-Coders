const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/shows"
// router.route("/users")
//   .get(usersController.findAll)  
//   .post(usersController.create);
router.route("/login")
  // .get(usersController.findById)
  .post((req, res) => {
    // console.log(req.body)
    db.User.findOne({email: req.body.email})
    // db.User.find()
    // db.User.create(req.body)
    .then(dbUser => {
      if (req.body.password === dbUser.password) {
        res.send("Password Correct");
  
      }else{
        res.send("Incorrect Password");
      }
      // console.log(dbUser);
      // res.json(dbUser);
  
    })
    .catch(err => {
      res.json(err);
    });
    // res.send("Login!");
  
  });



// Matches with "/api/books/:id"
router
  .route("/users/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove)

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

