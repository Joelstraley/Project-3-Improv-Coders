const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const cors = require("cors");
const routes = require("./routes");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// CORS
app.use(cors())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/* mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/proj3logindb",  */


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/comedyshows", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
      .then(() => console.log('Connected Successfully'))
      .catch((err) => console.error('Not Connected'));






// Define API routes here
app.use(routes);
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


/* app.get("/", (req, res) => {
  res.send("Hello world!");
 });
 console.log(req.body)

 app.post("/show, (req, res) => {
//   // db.User.find()
db.Show.findOne({title: req.body.email})
   .then(dbUser => {
   db.User.create(req.body)
        res.send("Password Correct");
     if (req.body.password === dbUser.password) {
     }else{
       res.send("Incorrect Password");

     }
     console.log(dbUser);
     res.json(dbUser);
   })
   .catch(err => {
  
     res.json(err);
   });
  res.send("Login!");
 });
 */


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
