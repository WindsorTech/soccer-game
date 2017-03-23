// Function to restart the game
function restart() {

		score = 0;

		music.stop();

		game.state.start('menu');
}

var leaderState = {

	create: function() {

		game.add.sprite(0, 0, 'futebol');

		//Leaderboard Page headers
		var winLabel = game.add.text(370, 30, 'TOP 5 LEADERBOARD', {font: '50px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(480, 110, 'Player', {font: '38px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(700, 110, 'Goals', {font: '38px Arial', fill: '#ffffff', fontWeight: 'bold'});

		// Call to get data from Database
		$.get('/leaderboard', function(data) { 

		console.log(data);

		//Loop over the leaders object array
		for (var i = 0; i < data.length; i++) {

			console.log(data[i]);
			
		}
		//======================RANKINGS - 1st PLACE=====================//
		game.add.text(440, 170, '1 - ' + data[0].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(740, 170, data[0].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//======================2nd PLACE=====================//
		game.add.text(440, 220, '2 - ' + data[1].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(740, 220, data[1].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//======================3rd PLACE=====================//
		game.add.text(440, 270, '3 - ' + data[2].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(740, 270, data[2].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//======================4th PLACE=====================//
		game.add.text(440, 320, '4 - ' + data[3].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(740, 320, data[3].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//======================5th PLACE=====================//
		game.add.text(440, 370, '5 - ' + data[4].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(740, 370, data[4].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		});

		// Play Again button
		game.add.button(game.world.centerX - 95, 500, 'play-again', restart, this, 2, 1, 0);

	},

	restart: function() {

		score = 0;

		game.state.start('menu');
		
	}
};