// packages
var express = require('express');

var router = express.Router();

var Leader = require("../models/Leader.model.js");

// routes for express and database manipulation

router.get('/', function(req, res){

    //res.render(__dirname, '/../main');

    //res.sendFile(path.join(__dirname, '/../main'));

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

//============================================================//

router.get('/leaderboard', function(req, res) { 
	Leader.find({})
		.exec(function(err, leaders) {
			if(err) {
				res.send('there is something wrong here');
			} else {
				res.send(leaders);
				//res.render("leaderboard", { leader_data : leaders });
			}

		});
});

//===========================================================//

// router.get('/leaders', function(req, res){
// 	Leader.find({})
// 		.exec(function(err, leaders) {
// 			if(err) {
// 				res.send('there is something wrong here');
// 			} else {
// 				//console.log(leaders);
// 				//res.json(leaders);
// 				//res.render('leaderboard');
// 				res.render("leaderboard", { leader_data : leaders });
// 			}

// 		});
// });

// router.post('/leaders', function (req, res) {
// 	Leader.create(req.body, function(err, player) {
// 		if(err) {
// 			res.send('Error saving player');
// 		} else {
// 			console.log(player);
// 			res.send(player);
// 		}
// 	});
// });

module.exports = router; 