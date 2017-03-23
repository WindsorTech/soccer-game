// packages
var express = require('express');

var router = express.Router();

var Leader = require("../models/Leader.model.js");

// routes for express and database manipulation

router.get('/', function(req, res){

    res.render('index');

});

router.post('/leaderboard', function (req, res) {
	var newLeader = new Leader();

	newLeader.name = req.body.name;
	newLeader.score = req.body.score;

	newLeader.save(function(err, leader) {
		if(err) {
			res.send('Error saving player');
		} else {
			res.send(leader);
		}
	});	
});

router.get('/leaderboard', function(req, res) { 
	var info = Leader.find({}).sort({'score': -1}).limit(5);
		info.exec(function(err, leaders) {
			if(err) {
				res.send('there is something wrong here');
			} else {
				res.send(leaders);
			}

		});
});

module.exports = router;