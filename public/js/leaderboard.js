function playAgain() {

		game.state.start('menu');
}

var leaderState = {

	create: function() {

		game.add.sprite(0, 0, 'futebol');

		var winLabel = game.add.text(480, 50, 'LEADERBOARD', {font: '50px Arial', fill: '#ffffff', fontWeight: 'bold'});

		//var finalScore = game.add.text(460, 150, 'Total Score: ' + score + ' goals', {font: '40px Arial', fill: '#ffffff', fontWeight: 'bold'});

		var nameLabel = game.add.text(460, 290, 'Insert Database Rank Here', {font: '32px Arial', fill: '#ffffff', fontWeight: 'bold'});

		var button2 = game.add.button(game.world.centerX - 70, 420, 'button', playAgain, this, 2, 1, 0);

	},

	playAgain: function() {

		game.state.start('menu');
		
	}
};