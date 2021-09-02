const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
const path = require('path');

// Bodyparser middleware
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
// DB Config
const db = process.env.MONGOURI
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware

//Serve static assets if in production
if (process.env.NODE_ENV == 'production'){
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*' , (req,res)=>{
    res.sendFile(apth.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));