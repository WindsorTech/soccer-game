// packages
var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');
var http = require('http');
var hb = require('handlebars');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

//require Leader.model.js file
var Leader = require("./models/Leader.model.js");

// routes
var routes = require('./controllers/controller.js');

// create the app
var app = express();

// serve static files from the current directory
app.use(express.static('public'));

// Mongoose Promise
mongoose.Promise = Promise;

// Mongoose Database Config
//mongoose.connect("mongodb://heroku_tv2tjk03:e8j44480oesvh566hpcdl9enmk@ds137340.mlab.com:37340/heroku_tv2tjk03");

mongoose.connect("mongodb://localhost/leaderboard");

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// port
var PORT = process.env.PORT || 3000;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// method override
app.use(methodOverride("_method"));

app.use('/', routes);

app.use("/update", routes);

app.use("/create", routes);

// Port listen
app.listen(PORT, function() {

	console.log("server is working open http://localhost:3000");

});