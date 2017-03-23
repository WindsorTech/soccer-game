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
		var winLabel = game.add.text(380, 25, 'TOP 8 LEADERBOARD', {font: '44px Arial', fill: '#ffffff', fontWeight: 'bold'});

		game.add.text(460, 100, 'Player', {font: '36px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(680, 100, 'Goals', {font: '36px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(350, 120, '___________________________________', {fill: '#ffffff'});

		// Call to get data from Database
		$.get('/leaderboard', function(data) { 

		console.log(data);

		//Loop over the leaders object array
		for (var i = 0; i < data.length; i++) {

			console.log(data[i]);
			
		}
		//======================RANKINGS - 1st PLACE=====================//
		game.add.text(440, 160, '1 - ' + data[0].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(420, 170, '_______________________', {fill: '#a1aab7'});
		game.add.text(720, 160, data[0].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//======================2nd PLACE=====================//
		game.add.text(440, 210, '2 - ' + data[1].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(420, 220, '_______________________', {fill: '#a1aab7'});
		game.add.text(720, 210, data[1].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//======================3rd PLACE=====================//
		game.add.text(440, 260, '3 - ' + data[2].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(420, 270, '_______________________', {fill: '#a1aab7'});
		game.add.text(720, 260, data[2].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//======================4th PLACE=====================//
		game.add.text(440, 310, '4 - ' + data[3].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(420, 320, '_______________________', {fill: '#a1aab7'});
		game.add.text(720, 310, data[3].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//======================5th PLACE=====================//
		game.add.text(440, 360, '5 - ' + data[4].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(420, 370, '_______________________', {fill: '#a1aab7'});
		game.add.text(720, 360, data[4].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		//======================6th PLACE=====================//
		game.add.text(440, 410, '6 - ' + data[5].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(420, 420, '_______________________', {fill: '#a1aab7'});
		game.add.text(720, 410, data[5].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		//======================7th PLACE=====================//
		game.add.text(440, 460, '7 - ' + data[6].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(420, 470, '_______________________', {fill: '#a1aab7'});
		game.add.text(720, 460, data[6].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		//======================8th PLACE=====================//
		game.add.text(440, 510, '8 - ' + data[7].name, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(720, 510, data[7].score, {font: '30px Arial', fill: '#ffffff', fontWeight: 'bold'});
		game.add.text(350, 520, '___________________________________', {fill: '#ffffff'});

		});

		// Play Again buttons
		game.add.button(game.world.centerX - 500, 230, 'play-again', restart, this, 2, 1, 0);
		game.add.button(game.world.centerX + 380, 230, 'play-again', restart, this, 2, 1, 0);

	},

	restart: function() {

		score = 0;

		game.state.start('menu');
		
	}
};