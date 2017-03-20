// packages
var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');
var http = require('http');
var hb = require('handlebars');
var exphbs = require('express-handlebars');

// routes
var routes = require('./controllers/controller.js');

// create the app
var app = express();

// serve static files from the current directory
app.use(express.static('public'));

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