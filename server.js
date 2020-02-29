// import all of the node modules we installed and need to run this app 
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// var mysql = require("mysql");


// create an express application
const app = express();
var PORT = process.env.PORT || 8080;

// static-router
app.use(express.json());

// The extended option allows to choose between parsing the URL - encoded data with the querystring library(when false) or the qs library(when true).

// Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// use API and HTML routes
// api routes store and retrieve data from the data array. this mimics fetching data from a database and saving to it
// html files or static routes are the views of our app and they will make requests to the API routes to fetch and update the data
app.use(apiRoutes);
app.use(htmlRoutes);

// start the application
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});