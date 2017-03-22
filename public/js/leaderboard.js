function restart() {

		score = 0;

		game.state.start('menu');
}

var leaderState = {

	create: function() {

		game.add.sprite(0, 0, 'futebol');

		var winLabel = game.add.text(450, 30, 'LEADERBOARD', {font: '50px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(480, 110, 'Player', {font: '38px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(700, 110, 'Goals', {font: '38px Arial', fill: '#ffffff', fontWeight: 'bold'});

		$.get('/leaderboard', function(data) { 

		console.log(data);

		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}

		game.add.text(470, 170, data[0].name, {font: '32px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(740, 170, data[0].score, {font: '32px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(470, 220, data[1].name, {font: '32px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(740, 220, data[1].score, {font: '32px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(470, 270, data[2].name, {font: '32px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(740, 270, data[2].score, {font: '32px Arial', fill: '#ffffff', fontWeight: 'bold'});

		});

		game.add.button(game.world.centerX - 95, 500, 'play-again', restart, this, 2, 1, 0);

	},

	restart: function() {

		score = 0;

		game.state.start('menu');
		
	}
};