const express = require("express");
const session = require("express-session");
const passport = require('passport');
const passportlocal= require("passport-local").Strategy;
const bodyParser = require('body-parser');
const User = require("./models/user.js")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const cors = require("cors");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
// Body parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// CORS
app.use(cors({origin: process.env.origin_url}))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());


// mongoose.connect('mongodb://127.0.0.1:27017/passport-jwt', { useMongoClient: true });
mongoose.connect('mongodb://127.0.0.1:27017/comedyshows', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // useFindAndModify: false
  });
  // mongoose.set("useCreateIndex", true);
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;
// Proj database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/comedyshows", 
// {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false
  // });
  
require("./auth/passport.js")


const routes = require('./routes');
// const secureRoute = require('./routes/secure_routes/secure-routes');




app.use('/', routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.

// app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);
 

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});



// Define API routes here
// app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
// app.post("/login", (req, res) => {
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



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
