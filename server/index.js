const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { sequelize, Sequelize } = require("./models");
const rootRouter = require("./routers");
const cookieParser = require("cookie-parser");
const passport = require("passport")
require("./passport")
const path = require("path");
const cookieSession = require("cookie-session")
const app = express();

dotenv.config();
const session = require('express-session');


// Use express-session middleware
app.use(session({
  secret: 'your_secret_key_here',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);



const publicPathDirectory = path.join(__dirname, "public");
app.use(express.static(publicPathDirectory));

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", rootRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.log("Unable to connect to the database", err);
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

